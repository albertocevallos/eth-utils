import React, { useState } from 'react'
import { Text, Spacer, Input } from '@geist-ui/core'
import { toBaseUnitBN, toTokenUnitsBN } from 'utils/bignumber'

export const meta = {
  title: 'Converter',
  group: 'Math',
}

export const Converter = () => {
  const [value, setValue] = useState<string>('')

  const handleValueChange = (e: any, base: number) => {
    console.log(e.target.value)
    setValue(toBaseUnitBN(e.target.value, base).toFixed())
  }

  return (
    <React.Fragment>
      <Spacer h={6} />
      <Text h2>Converter</Text>
      <Text p>Simple unit converter for Ether units.</Text>
      <Spacer h={2} />
      <div className="group">
        <Input
          label={'Wei'}
          placeholder="Wei"
          htmlType="number"
          value={toTokenUnitsBN(value, 1).toFixed()}
          onChange={(e) => handleValueChange(e, 1)}
          width={30}
        />
        <Spacer h={1} />
        <Input
          label={'Gwei'}
          placeholder="Gwei"
          htmlType="number"
          value={toTokenUnitsBN(value, 9).toFixed()}
          onChange={(e) => handleValueChange(e, 9)}
          width={30}
        />
        <Spacer h={1} />
        <Input
          label={'Ether'}
          placeholder="Ether"
          htmlType="number"
          value={toTokenUnitsBN(value, 18).toFixed()}
          onChange={(e) => handleValueChange(e, 18)}
          width={30}
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
