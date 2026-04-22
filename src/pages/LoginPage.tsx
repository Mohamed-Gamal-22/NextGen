import { useState, type SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { loginSchema, type LoginFormData } from '../validation/schemas/loginSchema'

export function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof LoginFormData, string>>>(
    {},
  )

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    const result = loginSchema.safeParse(formData)
    if (!result.success) {
      const fieldErrors = z.flattenError(result.error).fieldErrors
      setErrors({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      })
      return
    }

    setErrors({})
  }

  return (
    <section className="mx-auto w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 dark:border-neutral-800 dark:bg-neutral-900">
      <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
        تسجيل الدخول
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        سجل دخولك للوصول إلى خدمات المنصة.
      </p>
      <form className="mt-5 space-y-3" onSubmit={handleSubmit} noValidate>
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
        <button
          type="submit"
          className="w-full rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          دخول
        </button>
      </form>
      <Link
        to="/register"
        className="mt-4 inline-flex text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        ليس لديك حساب؟ إنشاء حساب جديد
      </Link>
    </section>
  )
}
