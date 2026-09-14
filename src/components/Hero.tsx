import type { ReactNode } from 'react'
import Breadcrumb, { type Crumb } from './Breadcrumb'

interface HeroProps {
  image: string
  title: string
  subtitle?: string
  crumbs?: Crumb[]
  /** الصفحة الرئيسية تستعمل hero طويل، الصفحات الداخلية hero أقصر */
  size?: 'large' | 'small'
  children?: ReactNode
}

export default function Hero({ image, title, subtitle, crumbs, size = 'small', children }: HeroProps) {
  const height = size === 'large' ? 'min-h-[70vh] py-20 sm:min-h-[80vh]' : 'min-h-[38vh] py-14'

  return (
    <section className={`relative flex items-center overflow-hidden bg-ink ${height}`}>
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/60 to-ink/40" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        {crumbs && <Breadcrumb items={crumbs} />}

        <h1
          className={`font-extrabold leading-tight text-white ${
            size === 'large' ? 'text-3xl sm:text-5xl lg:text-6xl' : 'text-2xl sm:text-4xl'
          }`}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{subtitle}</p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
