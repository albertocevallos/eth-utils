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
      <style jsx>{`
        .tabs {
          flex: 1 1;
          padding: 0 ${theme.layout.gap};
        }
        .tabs :global(.content) {
          display: none;
        }
        @media only screen and (max-width: ${theme.breakpoints.xs.max}) {
          .tabs {
            display: none;
          }
        }
        .controls {
          flex: 1 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .controls :global(.menu-toggle) {
          display: flex;
          align-items: center;
          min-width: 40px;
          height: 40px;
          padding: 0;
        }
      `}</style>
    </>
  )
}
