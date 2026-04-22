import { z } from 'zod'
import {
  arabCountryDialCodes,
  arabLocalPhoneRules,
  localPhoneRegex,
} from '../constants/arabPhone'

export const accountTypeOptions = ['freelancer', 'company'] as const

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, 'الاسم يجب أن يكون حرفين على الأقل')
    .max(25, 'الاسم طويل جدًا'),
  email: z.email('البريد الإلكتروني غير صحيح'),
  password: z
    .string()
    .min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل')
    .max(20, 'كلمة المرور طويلة جدًا'),
  countryCode: z
    .string()
    .refine(
      (value) =>
        (arabCountryDialCodes as readonly string[]).includes(value.trim()),
      'اختيار الدولة مطلوب',
    ),
  localPhone: z
    .string()
    .regex(localPhoneRegex, 'صيغة رقم الهاتف المحلي غير صحيحة')
    .refine((value) => {
      const normalized = value.replace(/[()\-\s]/g, '')
      if (!/^\d+$/.test(normalized)) return false
      return normalized.length >= 6 && normalized.length <= 12
    }, 'رقم الهاتف المحلي يجب أن يكون من 6 إلى 12 رقمًا'),
  accountType: z
    .string()
    .refine(
      (value) =>
        (accountTypeOptions as readonly string[]).includes(value.trim()),
      'اختيار النوع مطلوب',
    ),
}).superRefine((data, ctx) => {
  const localPhone = data.localPhone.replace(/[()\-\s]/g, '')
  const rule = arabLocalPhoneRules[data.countryCode]

  if (!rule) {
    ctx.addIssue({
      code: 'custom',
      path: ['countryCode'],
      message: 'اختيار الدولة غير مدعوم',
    })
    return
  }

  if (!rule.lengths.includes(localPhone.length)) {
    ctx.addIssue({
      code: 'custom',
      path: ['localPhone'],
      message: `رقم ${data.countryCode} يجب أن يكون بطول ${rule.lengths.join(' أو ')} رقم`,
    })
    return
  }

  if (
    rule.prefixes &&
    !rule.prefixes.some((prefix) => localPhone.startsWith(prefix))
  ) {
    ctx.addIssue({
      code: 'custom',
      path: ['localPhone'],
      message: `رقم الهاتف لا يطابق صيغة الدولة ${data.countryCode}`,
    })
  }
}).transform((data) => ({
  ...data,
  phone: `${data.countryCode}${data.localPhone.replace(/[()\-\s]/g, '')}`,
}))

export type RegisterFormDataInput = z.input<typeof registerSchema>
export type RegisterFormData = z.output<typeof registerSchema>
