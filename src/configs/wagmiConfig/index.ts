import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { bscTestnet } from 'viem/chains'
import icon from '../../assets/icon-walletconnect.png'

const projectId = '81aeef8111cc3abed63a213a04a4a50e'

const metadata = {
  name: 'Baby Luffy Cup',
  description: 'Play to earn - Baby Luffy Cup',
  url: 'https://blcup.gg',
  icons: [icon]
}

const chains = [bscTestnet]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

export default wagmiConfig