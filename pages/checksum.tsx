import React, { useState } from 'react'
import { Text, Spacer, Input, Page, useToasts, Button } from '@geist-ui/core'
import { ethers } from 'ethers'

export const Checksum = () => {
  const [value, setValue] = useState<string>('')
  const { setToast } = useToasts()

  const handleToast = (type: any, msg: string) =>
    setToast({
      text: msg,
      type,
    })

  const handleClick = () => {
    try {
      // check is not empty
      if (!value) {
        handleToast('error', 'Field cannot be empty.')
        return
      }
      // check length is 42 and starts with 0x
      if (value.length !== 42 || !value.startsWith('0x')) {
        handleToast('error', 'Address needs to be 42 characters and start with 0x.')
        return
      }
      // check if already checksum
      const isChecksum = ethers.utils.isAddress(value)
      if (isChecksum === true) {
        handleToast('success', 'Already checksummed.')
      }
      // return checksum
      const checksum = ethers.utils.getAddress(value)
      setValue(checksum)
    } catch (e) {
      console.log(e)
      handleToast('error', 'This is likely not an Ethereum address.')
      return
    }
  }

  return (
    <React.Fragment>
      <Spacer h={6} />
      <Page.Header>
        <h2>Checksum</h2>
      </Page.Header>
      <Text p>Convert Ethereum address to a checksummed address.</Text>
      <Spacer h={2} />
      <div className="group">
        <Input
          placeholder="0x123..."
          htmlType="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          width={25}
          scale={4 / 3}
          required={true}
          clearable
          marginRight={1}
        />
        <Button onClick={handleClick}>Submit</Button>
      </div>
      <style jsx>{`
        .group {
          display: flex;
          align-items: center;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Checksum
