import { useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import DepartureCard from '../components/DepartureCard'
import NotFound from './NotFound'
import { getAirport, sortedDates } from '../data'

export default function AirportPage() {
  const { airportId } = useParams()
  const airport = getAirport(airportId)

  if (!airport) return <NotFound />

  return (
    <>
      <Hero
        image={airport.image}
        title={airport.name}
        subtitle={airport.city}
        crumbs={[{ label: 'الرئيسية', to: '/' }, { label: airport.name }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <header className="max-w-3xl">
          <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">تواريخ الإقلاع المتاحة</h2>
          <p className="mt-3 text-base leading-relaxed text-ink/70">{airport.intro}</p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedDates(airport).map((departure) => (
            <DepartureCard key={departure.id} airport={airport} departure={departure} />
          ))}
        </div>
      </section>
    </>
  )
}
