import React, { useMemo, useCallback } from 'react'
import { GeistUIThemes, Page, Tabs } from '@geist-ui/core'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import useLocale from 'lib/use-locale'
import Metadata from 'lib/data'

const Wrapper = styled.div`
  ${() => {
    return `
    height: 100%;
    display: flex;
    flex-direction: column;
    
  `
  }}
`

const menuOptions: string[] = ['/converter', 'hex']

interface LayoutProps {
  children: JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  const { tabbar: currentUrlTabValue, locale } = useLocale()
  const allSides = useMemo(() => Metadata[locale], [locale])

  const router = useRouter()

  const handleTabChange = useCallback(
    (tab: string) => {
      const shouldRedirectDefaultPage = currentUrlTabValue !== tab
      if (!shouldRedirectDefaultPage) return
      const defaultPath = `/${locale}/${tab}`
      router.push(defaultPath)
    },
    [currentUrlTabValue, locale]
  )

  return (
    <div style={{ height: '100%', minHeight: '100vh' }}>
      <Wrapper style={{ flex: '1 1 auto' }}>
        <Page>
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
              <Tabs.Item
                font="14px"
                label={tab.localeName || tab.name}
                value={tab.name}
                key={`${tab.localeName || tab.name}-${index}`}
              />
            ))}
          </Tabs>
          <>{children}</>
        </Page>
      </Wrapper>
    </div>
  )
}
