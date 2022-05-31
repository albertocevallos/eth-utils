import React, { useMemo, useCallback, useState, useEffect } from 'react'
import { Tabs } from '@geist-ui/core'
import { useRouter } from 'next/router'

import useLocale from 'lib/use-locale'
import Metadata from 'lib/data'

export const Menu = () => {
  const { tabbar: currentUrlTabValue, locale } = useLocale()
  const allSides = useMemo(() => Metadata[locale], [locale])
  const [expanded, setExpanded] = useState<boolean>(false)

  const router = useRouter()

  const handleTabChange = useCallback(
    (tab: string) => {
      const shouldRedirectDefaultPage = currentUrlTabValue !== tab
      if (!shouldRedirectDefaultPage) return
      const defaultPath = `/${locale}/${tab}`
      router.push(defaultPath.toLowerCase())
    },
    [currentUrlTabValue, locale]
  )
  return (
    <>
      <Tabs
        value={currentUrlTabValue}
        leftSpace={0}
        activeClassName="current"
        align="center"
        hideDivider
        hideBorder
        onChange={handleTabChange}
      >
        {allSides.map((tab, index) => (
          <Tabs.Item font="14px" label={tab.name} value={tab.name.toLowerCase()} key={`${tab.name}-${index}`} />
        ))}
      </Tabs>
    </>
  )
}
