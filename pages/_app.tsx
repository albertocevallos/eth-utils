import React, { useState, useEffect, useCallback } from 'react'

import { GeistProvider, CssBaseline } from '@geist-ui/core'
import 'styling/styles.css'
import { Layout } from 'components/Layout'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { PrefersContext, themes, ThemeType } from 'lib/use-prefers'

import * as gtag from 'lib/gtag'
import Script from 'next/script'

export default function MyApp(props: any) {
  const { Component, pageProps } = props
  const [themeType, setThemeType] = useState<ThemeType>('light')
  const router = useRouter()

  useEffect(() => {
    document.documentElement.removeAttribute('style')
    document.body.removeAttribute('style')

    const theme = window.localStorage.getItem('theme') as ThemeType
    if (themes.includes(theme)) setThemeType(theme)
  }, [])

  const switchTheme = useCallback((theme: ThemeType) => {
    setThemeType(theme)
    if (typeof window !== 'undefined' && window.localStorage) window.localStorage.setItem('theme', theme)
  }, [])

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <React.Fragment>
      <Head>
        <title>Ethereum Utils</title>
        <meta name="title" content="Ethereum Utils" />
        <meta name="description" content="Common utilities for ethereum developers." />
        <meta name="keywords" content="solidity, vyper, dao, defi, crypto, yield, ethereum, development" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <PrefersContext.Provider value={{ themeType, switchTheme }}>
          <React.Fragment>
            <Layout>
              <motion.div
                key={router.route}
                initial="pageInitial"
                animate="pageAnimate"
                variants={{
                  pageInitial: {
                    opacity: 0,
                  },
                  pageAnimate: {
                    opacity: 1,
                  },
                }}
              >
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <Script
                  strategy="afterInteractive"
                  src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                />
                <Script
                  id="gtag-init"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                  }}
                />

                <Component {...pageProps} />
              </motion.div>
            </Layout>
          </React.Fragment>
        </PrefersContext.Provider>
      </GeistProvider>
    </React.Fragment>
  )
}
