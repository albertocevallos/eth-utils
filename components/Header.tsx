import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { Image, useTheme } from '@geist-ui/core'
import useLocale from 'lib/use-locale'
import { Menu } from './Menu'
import { addColorAlpha } from '../utils/color'

export const Header = () => {
  const { tabbar: currentUrlTabValue, locale } = useLocale()
  const [isLocked, setIsLocked] = useState<boolean>(false)
  const theme = useTheme()

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
              <NextLink href={`/${locale}`}>
                <a aria-label="Go Home">
                  <Image
                    src="https://avatars.githubusercontent.com/u/27132021?s=400&u=1ee43c92f5cdfa31dec52fb8af6320e0e1b168e0&v=4"
                    width="20px"
                    height="20px"
                    mr={0.5}
                    draggable={false}
                    title="Logo"
                  />
                  Geist
                </a>
              </NextLink>
            </div>
            <div className="controls">controls</div>
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
          //width: 100%;
          backdrop-filter: saturate(180%) blur(5px);
          background-color: ${addColorAlpha(theme.palette.background, 0.8)};
          box-shadow: ${theme.type === 'dark' ? '0 0 0 1px #333' : '0 0 15px 0 rgba(0, 0, 0, 0.1)'};
          z-index: 999;
          padding: 1em 0em;
        }
        nav .content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1000px;
          height: 100%;
          margin: 0 auto;
          user-select: none;
          padding: 0 ${theme.layout.gap};
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
