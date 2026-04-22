/** المحتوى الظاهر للمنصة — NextGen Softweare House (مصدر واحد للنصوص) */
export const site = {
  name: 'NextGen Softweare House',
  tagline:
    'مشاريع ويب، موبايل، ووردبريس، شوبيفاي، وأنواع منتجات نضيفها مع الوقت.',
  intro:
    'منصة تعرض مشاريع شركتنا والمنتجات اللي بنقدّمها — المحتوى هنا من عندنا، من غير قوالب جاهزة من غيرنا.',
  /** يُنسخ نفس النص في `index.html` (وسم meta description) */
  metaDescription:
    'NextGen Softweare House — منصة مشاريع الشركة: ويب، موبايل، ووردبريس، شوبيفاي، وأنواع أخرى.',
} as const

export type SiteConfig = typeof site
