import React, { useMemo, useCallback, useState, useEffect } from 'react'
import { Tabs, useTheme } from '@geist-ui/core'
import { useRouter } from 'next/router'

import useLocale from 'lib/use-locale'

import { MENU } from 'lib/menu/menu'

export const Menu = () => {
  const { tabbar: currentUrlTabValue } = useLocale()
  const router = useRouter()
  const theme = useTheme()

  const handleTabChange = useCallback(
    (tab: string) => {
      console.log(tab)
      const shouldRedirectDefaultPage = currentUrlTabValue !== tab
      if (!shouldRedirectDefaultPage) return
      const defaultPath = `/${tab}`
      router.push(defaultPath.toLowerCase())
    },
    [currentUrlTabValue]
  )

  return (
    <div className="TabGroup">
      <Tabs value={currentUrlTabValue} leftSpace={0} activeClassName="current" align="left" onChange={handleTabChange}>
        {MENU.map((tab, index) => {
          return <Tabs.Item font="16px" label={tab} value={tab.toLowerCase()} key={`${tab}-${index}`} />
        })}
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
