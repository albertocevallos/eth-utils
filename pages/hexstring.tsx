import React, { useState } from 'react'
import { Text, Input, Spacer, Page, Select } from '@geist-ui/core'
import { BigNumber as BN } from 'ethers'

export const Hex = () => {
  const [value, setValue] = useState<string>('')

  const handleValueChange = (e: any) => {
    const val = e.target.value
    console.log(val)
    console.log(BN.from(val))
  }

  return (
    <React.Fragment>
      <Spacer h={6} />
      <Page.Header>
        <h2>Hexadecimal</h2>
      </Page.Header>
      <Text p>Simple hexadecimal to decimal converter.</Text>
      <Spacer h={2} />
      <div className="group">
        <div className="select">
          <Select placeholder="Choose one" marginRight={3} onChange={() => {}}>
            <Select.Option value="Hexadecimal">Hexadecimal</Select.Option>
            <Select.Option value="Decimal">Decimal</Select.Option>
          </Select>
          <Select placeholder="Choose one" onChange={() => {}}>
            <Select.Option value="Hexadecimal">Hexadecimal</Select.Option>
            <Select.Option value="Decimal">Decimal</Select.Option>
          </Select>
        </div>
        <Spacer h={1} />
        <Input placeholder="0x123..." htmlType="text" width={22} scale={4 / 3} />
      </div>
      <Input readOnly initialValue="readOnly" />

      <style jsx>{`
        .group {
          display: flex;
          flex-direction: column;
        }
        .select {
          display: flex;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Hex
