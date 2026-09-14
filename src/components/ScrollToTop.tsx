import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** يرجع الصفحة إلى الأعلى عند كل تنقل بين الصفحات */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}
