import React from 'react'
import { Text, Note, Spacer, Page } from '@geist-ui/core'

export const Hex = () => {
  return (
    <React.Fragment>
      <Spacer h={6} />
      <Page.Header>
        <h2>Hexadecimal</h2>
      </Page.Header>
      <Text p>Simple hexadecimal to decimal converter.</Text>
      <Spacer h={1} />
      <Note type="warning" width={22}>
        This util is currently under construction.
      </Note>
    </React.Fragment>
  )
}

export default Hex
