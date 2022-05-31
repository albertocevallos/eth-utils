import React from 'react'
import styled from 'styled-components'
import { Page } from '@geist-ui/core'

import { Header } from './Header'

const Wrapper = styled.div`
  ${() => {
    return `
    height: 100%;
    display: flex;
    flex-direction: column;
    
  `
  }}
`

interface LayoutProps {
  children: JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ height: '100%', minHeight: '100vh' }}>
      <Wrapper style={{ flex: '1 1 auto' }}>
        <Header />

        <Page>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>{children}</div>
        </Page>
      </Wrapper>
    </div>
  )
}
