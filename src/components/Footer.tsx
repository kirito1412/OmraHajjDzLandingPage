import { Link } from 'react-router-dom'
import { site } from '../data'
import type { FooterLink } from '../types'

/**
 * أي رابط في الفوتر تركت خانة url فارغة فيه (داخل site.json)
 * يعيد الزائر إلى الصفحة الرئيسية. ضع الرابط لاحقا وسيشتغل تلقائيا.
 */
function FooterItem({ link }: { link: FooterLink }) {
  const className = 'text-sm text-white/70 transition hover:text-white hover:underline'

  if (!link.url) {
    return (
      <Link to="/" className={className}>
        {link.label}
      </Link>
    )
  }

  return (
    <a href={link.url} target="_blank" rel="noreferrer" className={className}>
      {link.label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
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
              <span className="text-lg font-extrabold">{site.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{site.footer.about}</p>
          </div>

          {site.footer.columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-base font-bold">{column.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterItem link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} {site.name} — {site.footer.copyright}
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/60 transition hover:text-white"
          >
            facebook.com/OmraHajjDZ
          </a>
        </div>
      </div>
    </footer>
  )
}
