import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-white p-6 text-center sm:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">404</h1>
      <p className="mt-2 text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
        الصفحة غير موجودة.
      </p>
      <Link
        to="/"
        className="mt-5 inline-flex rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        العودة للرئيسية
      </Link>
    </section>
  )
}
