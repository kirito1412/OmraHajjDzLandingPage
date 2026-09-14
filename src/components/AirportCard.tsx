import { Link } from 'react-router-dom'
import type { Airport } from '../types'

/** بطاقة طويلة تمثل مطار الإقلاع في الصفحة الرئيسية */
export default function AirportCard({ airport }: { airport: Airport }) {
  return (
    <Link
      to={`/airport/${airport.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      <div className="relative aspect-4/5 overflow-hidden">
        <img
          src={airport.image}
          alt={airport.name}
          loading="lazy"
          className="size-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 right-4 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
          {airport.offers.length} عروض متاحة
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-extrabold text-ink">{airport.name}</h3>
        <p className="mt-1 text-sm font-semibold text-brand">{airport.city}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{airport.shortText}</p>

        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand">
          شاهد التواريخ المتاحة
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
      </div>
    </Link>
  )
}
