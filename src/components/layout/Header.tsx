import { Link, NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header
      className="relative overflow-hidden border-b border-black/20"
      style={{ backgroundImage: "url('/header-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/80" aria-hidden />
      <div className="relative border-b border-white/20 bg-black/35 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:gap-4 sm:px-6">
          <Link to="/" className="text-base font-bold tracking-wide text-white transition-opacity hover:opacity-90 sm:text-lg">
            NextGen Software House
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `rounded-full border px-4 py-2 transition-colors ${
                  isActive
                    ? 'border-white bg-white text-gray-900'
                    : 'border-white/60 text-white hover:border-white hover:bg-white/10'
                }`
              }
            >
              تسجيل الدخول
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `rounded-full border px-4 py-2 transition-colors ${
                  isActive
                    ? 'border-white bg-white text-gray-900'
                    : 'border-white/60 text-white hover:border-white hover:bg-white/10'
                }`
              }
            >
              إنشاء حساب
            </NavLink>
          </nav>
        </div>
      </div>
      <div className="relative mx-auto flex min-h-104 max-w-5xl flex-col items-center justify-center gap-6 px-4 py-16 text-center sm:min-h-128 sm:px-6 sm:py-24">
        <Link
          to="/"
          className="text-3xl font-extrabold text-white transition-opacity hover:opacity-90 sm:text-5xl"
        >
          <span className="inline-block tracking-[0.18em] sm:tracking-[0.22em]">نـكــســت</span>{' '}
          <span className="inline-block tracking-[0.16em] sm:tracking-[0.2em]">چـيـن</span>{' '}
          Software House
        </Link>
        <p className="max-w-2xl text-base leading-8 text-gray-100 sm:text-lg">
          احنا شريكك التقني لتحقيق هدف برنامجك باحترافية، من الفكرة للتنفيذ والتطوير المستمر ومتابعة المشروع.
        </p>
      </div>
    </header>
  )
}
