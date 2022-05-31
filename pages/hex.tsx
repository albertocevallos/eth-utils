import React from 'react'
import { Text, Spacer, Page } from '@geist-ui/core'

export const meta = {
  title: 'Hex',
  group: 'Math',
}

export const Hex = () => {
  return (
    <React.Fragment>
      <Spacer h={6} />
      <Page.Header>
        <h2>Hexadecimal</h2>
      </Page.Header>
      <Text p>Simple hexadecimal to decimal converter.</Text>
      <Spacer h={2} />
    </React.Fragment>
  )
}

export default Hex
