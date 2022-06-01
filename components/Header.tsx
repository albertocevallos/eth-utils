import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { Image, useTheme, Button } from '@geist-ui/core'
import { Menu } from './Menu'
import { addColorAlpha } from '../utils/color'
import * as Icons from 'react-feather'
import { usePrefers } from 'lib/use-prefers'

export const Header = () => {
  const [isLocked, setIsLocked] = useState<boolean>(false)
  const theme = useTheme()
  const prefers = usePrefers()

  useEffect(() => {
    const handler = () => {
      const isLocked = document.body.style.overflow === 'hidden'
      setIsLocked((last) => (last !== isLocked ? isLocked : last))
    }
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(function (mutation) {
        if (mutation.type !== 'attributes') return
        handler()
      })
    })

    observer.observe(document.body, {
      attributes: true,
    })
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="menu-wrapper">
        <nav className="menu">
          <div className="content">
            <div className="logo">
              <NextLink href={`/converter`}>
                <a aria-label="Go Home">🔧 Ethereum Utils</a>
              </NextLink>
            </div>
            <div className="controls">
              <Button
                aria-label="Toggle Dark mode"
                className="theme-button"
                auto
                type="abort"
                onClick={() => prefers.switchTheme(theme.type === 'dark' ? 'light' : 'dark')}
              >
                {theme.type === 'dark' ? <Icons.Sun size={16} /> : <Icons.Moon size={16} />}
              </Button>
            </div>
          </div>
          <div className="tabs">
            <Menu />
          </div>
        </nav>
      </div>
      <style jsx>{`
        .menu-wrapper {
          height: var(--geist-page-nav-height);
        }
        .menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding-right: ${isLocked ? 'var(--geist-page-scrollbar-width)' : 0};
          height: var(--geist-page-nav-height);
          width: 100%;
          backdrop-filter: saturate(180%) blur(5px);
          background-color: ${addColorAlpha(theme.palette.background, 0.8)};
          z-index: 999;
          box-shadow: inset 0 -1px ${theme.palette.border};
        }
        nav .content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1000px;
          height: 100%;
          margin: 0 auto;
          user-select: none;
          padding: 1em ${theme.layout.gap};
        }
        .logo {
          flex: 1 1;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .logo a {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          font-size: 1.125rem;
          font-weight: 500;
          color: inherit;
          height: 28px;
        }
        .logo :global(.image) {
          border: 1px solid ${theme.palette.border};
          border-radius: 2rem;
        }
        .tabs {
          flex: 1 1;
          padding: 0 ${theme.layout.gap};
        }
        .tabs :global(.content) {
          display: none;
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
