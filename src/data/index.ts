import airportsJson from './airports.json'
import siteJson from './site.json'
import type { Airport, Site } from '../types'

/**
 * كل بيانات الموقع موجودة في الملفين:
 *   src/data/site.json      → معلومات عامة، الفوتر، رقم الواتساب
 *   src/data/airports.json  → المطارات والعروض والتواريخ
 * يكفي تعديل الملفين لتحديث الموقع بالكامل.
 */
export const site = siteJson as Site
export const airports = airportsJson as Airport[]

export function getAirport(airportId?: string): Airport | undefined {
  return airports.find((airport) => airport.id === airportId)
}

export function getOffer(airportId?: string, offerId?: string) {
  const airport = getAirport(airportId)
  const offer = airport?.offers.find((item) => item.id === offerId)
  return { airport, offer }
}

/** ترتيب العروض من الأقرب تاريخا إلى الأبعد */
export function sortedOffers(airport: Airport) {
  return [...airport.offers].sort((a, b) => a.date.localeCompare(b.date))
}

/** رابط واتساب جاهز مع رسالة مكتوبة مسبقا */
export function whatsappLink(extra?: string) {
  const message = extra ? `${site.whatsappMessage} : ${extra}` : site.whatsappMessage
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
