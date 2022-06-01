import React from 'react'
import { Page, Text, useTheme, Link } from '@geist-ui/core'

export const Footer = () => {
  const theme = useTheme()

  return (
    <Page.Footer>
      <div className="FooterWrapper" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Text p>
          Contribute on{' '}
          <Link target="_blank" href="https://github.com/albertocevallos/ethutils" block>
            Github
          </Link>
          .
        </Text>
      </div>
      <style jsx>{`
        .FooterWrapper {
          padding: 1em ${theme.layout.gap};
        }
      `}</style>
    </Page.Footer>
  )
}
