import React, { useState, useEffect } from 'react'
import { Text, Input, Spacer, Page, Button, useToasts, Description, Snippet } from '@geist-ui/core'
import { Repeat } from '@geist-ui/icons'
import { BigNumber as BN } from 'ethers'

export const Hex = () => {
  const [base, setBase] = useState<string>('hexadecimal')
  const [value, setValue] = useState<string>('')
  const isHex = base == 'hexadecimal'

  const handleConvert = (event: string) => {
    if (!event) {
      setValue('')
      return
    }
    try {
      const num = BN.from(event)
      isHex ? setValue(num.toString()) : setValue(num.toHexString())
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <React.Fragment>
      <Spacer h={6} />
      <Page.Header>
        <h2>Hexstring Converter</h2>
      </Page.Header>
      <Text p>Hexadecimal to decimal converter.</Text>
      <div style={{ width: 'fit-content' }}>
        <Spacer h={2} />
        <Description
          title={`Input ${isHex ? 'hexadecimal' : 'decimal'}`}
          content={
            <p>
              <Input
                placeholder={isHex ? '0x1' : '123'}
                htmlType="text"
                width={24}
                scale={4 / 3}
                onChange={(e) => handleConvert(e.target.value)}
                clearable
                height={1.25}
              />{' '}
            </p>
          }
        />
        <Spacer h={2} />
        <Description
          title={`Output ${isHex ? 'decimal' : 'hexadecimal'}`}
          content={
            <p>
              <Snippet symbol="" text={value} width={24} scale={4 / 3} height={2.71} />{' '}
            </p>
          }
        />
        <Spacer h={2} />
        <Button
          iconRight={<Repeat />}
          auto
          onClick={() => {
            base === 'hexadecimal' ? setBase('decimal') : setBase('hexadecimal')
            setValue('')
          }}
        >
          Switch
        </Button>
      </div>

      <style jsx>{`
        .group {
          display: flex;
          flex-direction: column;
        }
        .select {
          display: flex;
          align-items: center;
        }
      `}</style>
    </React.Fragment>
  )
}
export default Hex
