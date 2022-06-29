import React, { useState } from 'react'
import { Text, Input, Spacer, Page, Description, Snippet } from '@geist-ui/core'
import { BigNumber as BN, ethers } from 'ethers'

export const Keccak256 = () => {
  const [value, setValue] = useState<string>('')

  const handleConvert = (event: string) => {
    if (!event) {
      setValue('')
      return
    }
    try {
      const hash = ethers.utils.id(event)
      setValue(hash)
      console.log(hash)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <React.Fragment>
      <Spacer h={6} />
      <Page.Header>
        <h2>Keccak-256 Converter</h2>
      </Page.Header>
      <Text p>Keccak-256 online hash function.</Text>
      <div style={{ width: 'fit-content' }}>
        <Spacer h={2} />
        <Description
          title={`Input string/number`}
          content={
            <p>
              <Input
                placeholder={'hello world'}
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
          title={`Output hash`}
          content={
            <p>
              <Snippet symbol="" text={value} width={24} scale={4 / 3} height={2.71} />{' '}
            </p>
          }
        />
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
export default Keccak256
