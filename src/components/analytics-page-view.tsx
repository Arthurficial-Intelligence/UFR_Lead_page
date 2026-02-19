'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { usePostHog } from 'posthog-js/react'
import { useEffect, Suspense } from 'react'

function PageViewInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const posthog = usePostHog()

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname
      const params = searchParams.toString()
      if (params) {
        url += '?' + params
      }
      posthog.capture('$pageview', { $current_url: url })
    }
  }, [pathname, searchParams, posthog])

  return null
}

export function AnalyticsPageView() {
  return (
    <Suspense fallback={null}>
      <PageViewInner />
    </Suspense>
  )
}
