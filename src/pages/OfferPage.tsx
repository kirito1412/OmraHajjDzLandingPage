import { useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import WhatsappButton from '../components/WhatsappButton'
import NotFound from './NotFound'
import { getDeparture } from '../data'
import type { OfferSection } from '../types'

/** النقاط التي تبدأ أصلا بإيموجي لا تحتاج علامة ✓ إضافية */
const startsWithEmoji = (text: string) => /^\p{Extended_Pictographic}/u.test(text)

function Section({ section }: { section: OfferSection }) {
  return (
    <section>
      <h2 className="text-xl font-extrabold text-ink sm:text-2xl">{section.title}</h2>

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-base leading-loose text-ink/80">
          {paragraph}
        </p>
      ))}

      {section.list && (
        <ul className="mt-4 space-y-2.5">
          {section.list.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-ink/80">
              {startsWithEmoji(item) ? (
                <span className="mt-1 size-5 shrink-0" aria-hidden="true" />
              ) : (
                <svg viewBox="0 0 24 24" className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true">
                  <path
                    d="M20 6 9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {item}
            </li>
          ))}
        </ul>
      )}

      {section.prices && (
        <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-black/10">
          <table className="w-full text-base">
            <tbody>
              {section.prices.map((row, index) => (
                <tr key={row.room} className={index % 2 ? 'bg-white' : 'bg-brand-light/40'}>
                  <th scope="row" className="px-4 py-3 text-right font-semibold text-ink/80">
                    {row.room}
                  </th>
                  <td className="px-4 py-3 text-left font-extrabold text-brand">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default function OfferPage() {
  const { airportId, offerId } = useParams()
  const { airport, departure } = getDeparture(airportId, offerId)

  if (!airport || !departure) return <NotFound />

  const facts = [
    { label: 'تاريخ الإقلاع', value: departure.label },
    { label: 'مدة الرحلة', value: airport.duration },
    { label: 'الإقامة', value: airport.stay },
    { label: 'السعر', value: airport.price },
    ...(departure.seats ? [{ label: 'الأماكن المتبقية', value: departure.seats }] : []),
  ]

  return (
    <>
      <Hero
        image={airport.image}
        title={departure.name}
        subtitle={airport.summary}
        crumbs={[
          { label: 'الرئيسية', to: '/' },
          { label: airport.name, to: `/airport/${airport.id}` },
          { label: departure.name },
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        {/* صورة كبيرة للعرض */}
        <img
          src={airport.image}
          alt={`${departure.name} — ${airport.name}`}
          className="w-full rounded-2xl shadow-sm ring-1 ring-black/5"
        />

        {/* معلومات سريعة */}
        <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:grid-cols-3 lg:grid-cols-5">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs text-ink/50">{fact.label}</dt>
              <dd className="mt-1 text-sm font-bold text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>

        {/* تفاصيل العرض */}
        <div className="mt-12 space-y-10">
          {airport.sections.map((section) => (
            <Section key={section.title} section={section} />
          ))}
        </div>

        {/* زر الحجز */}
        <div className="mt-14">
          <WhatsappButton context={`${departure.name} — ${airport.name}`} />
        </div>
      </article>
    </>
  )
}
