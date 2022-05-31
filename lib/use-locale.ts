import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useCurrentState } from '@geist-ui/core'

const DEFAULT_TAB = ''

export type LocaleTypes = {
  tabbar: string
}

const useLocale = (): LocaleTypes => {
  const { pathname } = useRouter()
  const [tabbar, setTab, tabRef] = useCurrentState<string>(DEFAULT_TAB)

  useEffect(() => {
    const names = pathname.split('/').filter((r) => !!r)
    const currentTabbar = names[0] || DEFAULT_TAB
    if (currentTabbar !== tabRef.current) {
      setTab(currentTabbar)
    }
  }, [pathname])

  return {
    tabbar,
  }
}

export default useLocale
