import { site } from '../config/site'

export function HomePage() {
  return (
    <section className="w-full">
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-400">
        {site.intro}
      </p>
    </section>
  )
}
