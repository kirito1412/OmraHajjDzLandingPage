import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <p className="text-6xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-2xl font-extrabold text-ink sm:text-3xl">الصفحة غير موجودة</h1>
      <p className="mt-3 text-base leading-relaxed text-ink/70">
        ربما تم حذف هذا العرض أو أن الرابط غير صحيح. يمكنك العودة إلى الصفحة الرئيسية وتصفح العروض المتاحة.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-xl bg-brand px-7 py-3.5 text-base font-bold text-white transition hover:bg-brand-dark"
      >
        العودة إلى الرئيسية
      </Link>
    </section>
  )
}
