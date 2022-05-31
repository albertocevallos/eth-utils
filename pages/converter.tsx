import React, { useState } from 'react'
import { Text, Spacer, Input, Page } from '@geist-ui/core'
import { toBaseUnitBN, toTokenUnitsBN } from 'utils/bignumber'

export const Converter = () => {
  const [value, setValue] = useState<string>('')
  const handleValueChange = (e: any, base: number) => {
    console.log(e.target.value)
    setValue(toBaseUnitBN(e.target.value, base).toFixed())
  }
  return (
    <React.Fragment>
      <Spacer h={6} />
      <Page.Header>
        <h2>Converter</h2>
      </Page.Header>
      <Text p>Simple unit converter for Ether units.</Text>
      <Spacer h={2} />
      <div className="group">
        <Input
          label={'Wei'}
          placeholder="Wei"
          htmlType="number"
          value={toTokenUnitsBN(value, 0).toFixed()}
          onChange={(e) => handleValueChange(e, 0)}
          width={20}
          scale={4 / 3}
        />
        <Spacer h={1} />
        <Input
          label={'Gwei'}
          placeholder="Gwei"
          htmlType="number"
          value={toTokenUnitsBN(value, 9).toFixed()}
          onChange={(e) => handleValueChange(e, 9)}
          width={20}
          scale={4 / 3}
        />
        <Spacer h={1} />
        <Input
          label={'Ether'}
          placeholder="Ether"
          htmlType="number"
          value={toTokenUnitsBN(value, 18).toFixed()}
          onChange={(e) => handleValueChange(e, 18)}
          width={20}
          scale={4 / 3}
        />
      </div>
      <style jsx>{`
        .group {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Converter
