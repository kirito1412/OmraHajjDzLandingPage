import { Link } from 'react-router-dom'
import type { Airport, Departure } from '../types'

/** بطاقة تاريخ الإقلاع داخل صفحة المطار */
export default function DepartureCard({
  airport,
  departure,
}: {
  airport: Airport
  departure: Departure
}) {
  return (
    <Link
      to={`/airport/${airport.id}/offer/${departure.id}`}
      className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="rounded-xl bg-brand-light px-4 py-3">
          <p className="text-lg font-extrabold leading-none text-brand">{departure.label}</p>
          <p className="mt-1.5 text-xs font-semibold text-brand/70">تاريخ الإقلاع</p>
        </div>
        {departure.seats && (
          <span className="rounded-full bg-sand px-3 py-1 text-xs font-bold text-ink/70">
            {departure.seats}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-lg font-extrabold text-ink">{departure.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{airport.summary}</p>

      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-black/5 pt-4 text-sm">
        <div>
          <dt className="text-xs text-ink/50">المدة</dt>
          <dd className="font-bold text-ink">{airport.duration}</dd>
        </div>
        <div>
          <dt className="text-xs text-ink/50">السعر</dt>
          <dd className="font-bold text-brand">{airport.price}</dd>
        </div>
      </dl>

      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand">
        تفاصيل العرض
        <svg viewBox="0 0 24 24" className="size-4 transition group-hover:-translate-x-1" aria-hidden="true">
          <path
            d="M15 6l-6 6 6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  )
}
