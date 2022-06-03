import React, { useState, useEffect, useCallback } from 'react'

import { GeistProvider, CssBaseline } from '@geist-ui/core'
import 'styling/styles.css'
import { Layout } from 'components/Layout'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { PrefersContext, themes, ThemeType } from 'lib/use-prefers'

import { GTM_ID, pageview } from 'lib/gtm'
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
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
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
                {/* Google Tag Manager - Global base code */}
                <Script
                  id="gtag-base"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
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
