import { providers } from 'ethers'
import { sleep } from './index'

export const waitForBlock = async (
  provider: providers.Web3Provider | providers.JsonRpcProvider,
  requiredBlockNumber?: number
) => {
  if (!requiredBlockNumber) {
    return
  }
  let currentBlockNumber = await provider.getBlockNumber()
  while (currentBlockNumber < requiredBlockNumber) {
    await sleep(300)
    await provider.poll()
    currentBlockNumber = await provider.getBlockNumber()
  }
}
