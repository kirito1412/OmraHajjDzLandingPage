export interface RoomPrice {
  room: string
  price: string
}

export interface OfferSection {
  title: string
  /** فقرات نصية عادية */
  paragraphs?: string[]
  /** قائمة نقاط */
  list?: string[]
  /** جدول أسعار الغرف */
  prices?: RoomPrice[]
}

/** تاريخ إقلاع واحد داخل مطار */
export interface Departure {
  /** يظهر في الرابط — حروف لاتينية بدون فراغات */
  id: string
  /** YYYY-MM-DD — يستعمل للترتيب فقط */
  date: string
  /** التاريخ كما يظهر للزائر */
  label: string
  /** اسم العرض في مسار التصفح وفي عنوان الصفحة */
  name: string
  /** الأماكن المتبقية — اتركه فارغا إذا لم ترد إظهاره */
  seats?: string
}

export interface Airport {
  id: string
  name: string
  city: string
  shortText: string
  image: string
  intro: string
  /** معلومات مشتركة بين كل تواريخ هذا المطار */
  duration: string
  price: string
  stay: string
  summary: string
  /** تفاصيل العرض المطوّلة — تظهر في صفحة العرض فقط */
  sections: OfferSection[]
  dates: Departure[]
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
  /** رقم الواتساب بالصيغة الدولية بدون + وبدون فراغات */
  whatsapp: string
  /** الرقم كما يظهر للزائر */
  whatsappDisplay: string
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
