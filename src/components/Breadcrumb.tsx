import { Link } from 'react-router-dom'

export interface Crumb {
  label: string
  /** إذا كان فارغا فهذا يعني أننا في الصفحة الحالية */
  to?: string
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="مسار التصفح" className="mb-4">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/80 sm:text-base">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-x-2">
            {index > 0 && (
              <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-white/50" aria-hidden="true">
                <path
                  d="M15 6l-6 6 6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {item.to ? (
              <Link to={item.to} className="transition hover:text-white hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-white" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
