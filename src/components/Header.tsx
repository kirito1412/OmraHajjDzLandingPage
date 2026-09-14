import { Link } from 'react-router-dom'
import { site } from '../data'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-lg bg-brand text-white">
            <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
              <path
                d="M12 2.5 4.5 7v3h15V7L12 2.5Z M6.5 10v8 M11 10v8 M17.5 10v8 M3.5 21.5h17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-base font-extrabold text-ink sm:text-lg">{site.name}</span>
        </Link>

        <a
          href={site.facebook}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-brand px-3 py-1.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
        >
          صفحتنا على فيسبوك
        </a>
      </div>
    </header>
  )
}
