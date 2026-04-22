import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email('البريد الإلكتروني غير صحيح'),
  password: z
    .string()
    .min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل')
    .max(20, 'كلمة المرور طويلة جدًا'),
})

export type LoginFormData = z.infer<typeof loginSchema>
