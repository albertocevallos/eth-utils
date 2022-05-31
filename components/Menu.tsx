import React, { useMemo, useCallback, useState, useEffect } from 'react'
import { Tabs, useTheme } from '@geist-ui/core'
import { useRouter } from 'next/router'

import useLocale from 'lib/use-locale'
import Metadata from 'lib/data'

export const Menu = () => {
  const { tabbar: currentUrlTabValue, locale } = useLocale()
  const allSides = useMemo(() => Metadata[locale], [locale])
  const [expanded, setExpanded] = useState<boolean>(false)
  const router = useRouter()
  const theme = useTheme()

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
    <div className="TabGroup">
      <Tabs value={currentUrlTabValue} leftSpace={0} activeClassName="current" align="left" onChange={handleTabChange}>
        {allSides.map((tab, index) => (
          <Tabs.Item font="16px" label={tab.name} value={tab.name.toLowerCase()} key={`${tab.name}-${index}`} />
        ))}
      </Tabs>
      <style jsx>{`
        .TabGroup {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1000px;
          height: 100%;
          margin: 0 auto;
          user-select: none;
        }
      `}</style>
    </div>
  )
}
