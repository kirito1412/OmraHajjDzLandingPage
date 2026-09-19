import { useRef } from 'react'
import Hero from '../components/Hero'
import AirportCard from '../components/AirportCard'
import { airports, site } from '../data'

export default function Home() {
  const offersRef = useRef<HTMLElement>(null)

  /**
   * لا نستعمل href="#offers" لأن الموقع يشتغل بـ HashRouter،
   * والـ hash محجوز للتنقل بين الصفحات. لذلك نمرر يدويا إلى القسم.
   */
  const scrollToOffers = () => {
    offersRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Hero image={site.heroImage} title={site.heroTitle} subtitle={site.heroSubtitle} size="large">
        <button
          type="button"
          onClick={scrollToOffers}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-base font-bold text-white transition hover:bg-brand-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
        >
          تصفح العروض
          <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
            <path
              d="M12 5v14M6 13l6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Hero>

      {/* scroll-mt يترك مساحة للهيدر الثابت عند التمرير إلى القسم */}
      <section
        ref={offersRef}
        id="offers"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
      >
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-ink sm:text-4xl">{site.offersSectionTitle}</h2>
          <p className="mt-3 text-base leading-relaxed text-ink/70">{site.offersSectionSubtitle}</p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {airports.map((airport) => (
            <AirportCard key={airport.id} airport={airport} />
          ))}
        </div>
      </section>
    </>
  )
}
