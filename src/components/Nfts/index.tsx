import { useTranslation } from 'react-i18next'
import Nfts from './Nfts'
import nft1 from '../../assets/nft1.png'
import nft2 from '../../assets/nft2.png'
import nft3 from '../../assets/nft3.png'
import nft4 from '../../assets/nft4.png'

export default () => {
  const { t } = useTranslation()
  const nfts = [{
    src: nft1,
    alt: 'Baby Luffy Cup NFT #1'
  },
  {
    src: nft2,
    alt: 'Baby Luffy Cup NFT #2'
  },
  {
    src: nft3,
    alt: 'Baby Luffy Cup NFT #3'
  },
  {
    src: nft4,
    alt: 'Baby Luffy Cup NFT #4'
  }]

  return <Nfts title={t('nftsTitle')} nfts={nfts} button={t('buyNft')} />
} 