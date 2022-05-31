import React from 'react'
import { Text, Spacer } from '@geist-ui/core'

export const meta = {
  title: 'Hex',
  group: 'Math',
}

export const Hex = () => {
  return (
    <React.Fragment>
      <Spacer h={6} />
      <Text h2>Hexadecimal</Text>
      <Text p>Simple hexadecimal to decimal converter.</Text>
      <Spacer h={2} />
    </React.Fragment>
  )
}

export default Hex
