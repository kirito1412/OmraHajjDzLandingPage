import { useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import WhatsappButton from '../components/WhatsappButton'
import NotFound from './NotFound'
import { getOffer } from '../data'

export default function OfferPage() {
  const { airportId, offerId } = useParams()
  const { airport, offer } = getOffer(airportId, offerId)

  if (!airport || !offer) return <NotFound />

  const facts = [
    { label: 'تاريخ الإقلاع', value: offer.dateLabel },
    { label: 'مدة الرحلة', value: offer.duration },
    { label: 'الإقامة', value: offer.hotel },
    { label: 'السعر', value: offer.price },
  ]

  return (
    <>
      <Hero
        image={offer.image}
        title={offer.name}
        subtitle={offer.summary}
        crumbs={[
          { label: 'الرئيسية', to: '/' },
          { label: airport.name, to: `/airport/${airport.id}` },
          { label: offer.name },
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        {/* صورة كبيرة للعرض */}
        <img
          src={offer.image}
          alt={offer.name}
          className="aspect-16/9 w-full rounded-2xl object-cover shadow-sm ring-1 ring-black/5"
        />

        {/* معلومات سريعة */}
        <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs text-ink/50">{fact.label}</dt>
              <dd className="mt-1 text-sm font-bold text-ink sm:text-base">{fact.value}</dd>
            </div>
          ))}
        </dl>

        {/* تفاصيل العرض */}
        <div className="mt-12 space-y-10">
          {offer.sections.map((section) => (
            <section key={section.title}>
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
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* زر الحجز */}
        <div className="mt-14">
          <WhatsappButton context={`${offer.name} — ${airport.name} (${offer.dateLabel})`} />
          <p className="mt-4 text-center text-sm text-ink/60">
            اضغط على الزر للتواصل معنا مباشرة عبر الواتساب
          </p>
        </div>
      </article>
    </>
  )
}
