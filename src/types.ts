export interface OfferSection {
  title: string
  /** فقرات نصية عادية */
  paragraphs?: string[]
  /** قائمة نقاط */
  list?: string[]
}

export interface Offer {
  id: string
  name: string
  /** تاريخ بصيغة YYYY-MM-DD يستعمل للترتيب فقط */
  date: string
  /** التاريخ كما يظهر للزائر */
  dateLabel: string
  duration: string
  price: string
  seats: string
  hotel: string
  image: string
  summary: string
  sections: OfferSection[]
}

export interface Airport {
  id: string
  name: string
  city: string
  shortText: string
  image: string
  intro: string
  offers: Offer[]
}

export interface FooterLink {
  label: string
  url: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface Site {
  name: string
  tagline: string
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  whatsapp: string
  whatsappMessage: string
  facebook: string
  offersSectionTitle: string
  offersSectionSubtitle: string
  footer: {
    about: string
    columns: FooterColumn[]
    copyright: string
  }
}
