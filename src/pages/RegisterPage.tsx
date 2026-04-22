import { useState } from 'react'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { arabCountries } from '../validation/constants/arabPhone'
import {
  registerSchema,
  type RegisterFormDataInput,
} from '../validation/schemas/registerSchema'

export function RegisterPage() {
  const [formData, setFormData] = useState<RegisterFormDataInput>({
    name: '',
    email: '',
    password: '',
    countryCode: arabCountries[0].dialCode,
    localPhone: '',
    accountType: 'freelancer',
  })
  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterFormDataInput, string>>
  >({})
  const selectedCountry = arabCountries.find(
    (country) => country.dialCode === formData.countryCode,
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const result = registerSchema.safeParse(formData)
    if (!result.success) {
      const fieldErrors = z.flattenError(result.error).fieldErrors
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
        countryCode: fieldErrors.countryCode?.[0],
        localPhone: fieldErrors.localPhone?.[0],
        accountType: fieldErrors.accountType?.[0],
      })
      return
    }

    setErrors({})
    // Full phone in E.164-like format is available in result.data.phone.
  }

  return (
    <section className="mx-auto w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 dark:border-neutral-800 dark:bg-neutral-900">
      <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
        إنشاء حساب
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        أنشئ حسابًا جديدًا للبدء على المنصة.
      </p>
      <form className="mt-5 space-y-3" onSubmit={handleSubmit} noValidate>
        <label className="block">
          <span className="mb-1.5 block text-sm text-neutral-700 dark:text-neutral-300">
            الاسم
          </span>
          <input
            type="text"
            value={formData.name}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, name: event.target.value }))
            }
            placeholder="الاسم الكامل"
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-neutral-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-950 dark:focus:border-blue-400 dark:focus:ring-blue-900/40"
          />
          {errors.name && (
            <span className="mt-1 block text-xs text-red-600 dark:text-red-400">
              {errors.name}
            </span>
          )}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-neutral-700 dark:text-neutral-300">
            البريد الإلكتروني
          </span>
          <input
            type="email"
            value={formData.email}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, email: event.target.value }))
            }
            placeholder="name@example.com"
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-neutral-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-950 dark:focus:border-blue-400 dark:focus:ring-blue-900/40"
          />
          {errors.email && (
            <span className="mt-1 block text-xs text-red-600 dark:text-red-400">
              {errors.email}
            </span>
          )}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-neutral-700 dark:text-neutral-300">
            كلمة المرور
          </span>
          <input
            type="password"
            value={formData.password}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, password: event.target.value }))
            }
            placeholder="********"
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-neutral-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-950 dark:focus:border-blue-400 dark:focus:ring-blue-900/40"
          />
          {errors.password && (
            <span className="mt-1 block text-xs text-red-600 dark:text-red-400">
              {errors.password}
            </span>
          )}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-neutral-700 dark:text-neutral-300">
            رقم الهاتف
          </span>
          <div
            dir="ltr"
            className="grid grid-cols-1 gap-2 sm:grid-cols-[45%_55%]"
          >
            <div className="relative">
              <select
                value={formData.countryCode}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    countryCode: event.target.value,
                  }))
                }
                className="w-full appearance-none rounded-lg border border-neutral-300 bg-white px-3 py-2 pr-10 text-xs outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 sm:text-sm dark:border-neutral-700 dark:bg-neutral-950 dark:focus:border-blue-400 dark:focus:ring-blue-900/40"
              >
                {arabCountries.map((country) => (
                  <option key={country.iso} value={country.dialCode}>
                    {country.flag} {country.country} ({country.dialCode})
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-neutral-500 dark:text-neutral-400">
                ▼
              </span>
            </div>
            <input
              type="tel"
              value={formData.localPhone}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  localPhone: event.target.value,
                }))
              }
              placeholder="1012345678"
              className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-neutral-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-950 dark:focus:border-blue-400 dark:focus:ring-blue-900/40"
            />
          </div>
          {selectedCountry && (
            <span className="mt-1 block text-xs text-neutral-500 dark:text-neutral-400">
              كود الدولة المختار: {selectedCountry.dialCode}
            </span>
          )}
          {(errors.countryCode || errors.localPhone) && (
            <span className="mt-1 block text-xs text-red-600 dark:text-red-400">
              {errors.countryCode ?? errors.localPhone}
            </span>
          )}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-neutral-700 dark:text-neutral-300">
            نوع الحساب
          </span>
          <div className="relative">
            <select
              value={formData.accountType}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  accountType: event.target.value,
                }))
              }
              className="w-full appearance-none rounded-lg border border-neutral-300 bg-white px-3 py-2 pr-10 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-950 dark:focus:border-blue-400 dark:focus:ring-blue-900/40"
            >
              <option value="freelancer">عميل مستقل</option>
              <option value="company">شركة</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-neutral-500 dark:text-neutral-400">
              ▼
            </span>
          </div>
          {errors.accountType && (
            <span className="mt-1 block text-xs text-red-600 dark:text-red-400">
              {errors.accountType}
            </span>
          )}
        </label>
        <button
          type="submit"
          className="w-full rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          إنشاء الحساب
        </button>
      </form>
      <Link
        to="/login"
        className="mt-4 inline-flex text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        لديك حساب بالفعل؟ تسجيل الدخول
      </Link>
    </section>
  )
}
