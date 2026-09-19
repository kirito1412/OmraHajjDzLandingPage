import airportsJson from './airports.json'
import siteJson from './site.json'
import type { Airport, Site } from '../types'

/**
 * كل بيانات الموقع موجودة في الملفين:
 *   src/data/site.json      → معلومات عامة، الفوتر، رقم الواتساب
 *   src/data/airports.json  → المطارات، تفاصيل العرض، وتواريخ الإقلاع
 * يكفي تعديل الملفين لتحديث الموقع بالكامل.
 */
export const site = siteJson as Site
export const airports = airportsJson as Airport[]

export function getAirport(airportId?: string): Airport | undefined {
  return airports.find((airport) => airport.id === airportId)
}

export function getDeparture(airportId?: string, dateId?: string) {
  const airport = getAirport(airportId)
  const departure = airport?.dates.find((item) => item.id === dateId)
  return { airport, departure }
}

/** ترتيب تواريخ الإقلاع من الأقرب إلى الأبعد */
export function sortedDates(airport: Airport) {
  return [...airport.dates].sort((a, b) => a.date.localeCompare(b.date))
}

/** رابط واتساب جاهز مع رسالة مكتوبة مسبقا */
export function whatsappLink(extra?: string) {
  const message = extra ? `${site.whatsappMessage} : ${extra}` : site.whatsappMessage
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
