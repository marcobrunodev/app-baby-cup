import { useTranslation } from 'react-i18next'
import GameHeader from './GameHeader'
import { link } from './GameHeader.types'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

export default () => {
  const { t } = useTranslation()
  const children: string[] = t('linksPlay').split(',')
  const links: link[] = children.map((children) => ({ children, href: `${children.toLocaleLowerCase().replace(/ /g, '').trim()}`, active: false }))
  const { open } = useWeb3Modal()
  const { address, isDisconnected } = useAccount()
  const [buttton, setButton] = useState(t('walletConnect'))

  useEffect(() => {
    if (address) setButton(address.substring(0, 4) + "..." + address.slice(-4))
  }, [address])

  useEffect(() => {
    if (isDisconnected) setButton(t('walletConnect'))
  }, [isDisconnected, t])

  return <GameHeader button={buttton} links={links} onClick={() => open()} />
}