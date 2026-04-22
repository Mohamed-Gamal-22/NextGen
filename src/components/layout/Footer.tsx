import { site } from '../../config/site'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white/90 px-4 py-3 sm:px-6 dark:border-gray-700 dark:bg-gray-900/90">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-center">
        <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
          {site.name}
        </p>
      </div>
    </footer>
  )
}
