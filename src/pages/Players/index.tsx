import { useTranslation } from 'react-i18next'
import Players from './Players'
import { useState } from 'react'

export default () => {
  const { t } = useTranslation()
  const [activeModalBuyNft, setActiveModalBuyNft] = useState(false)

  const openBox = () => setActiveModalBuyNft(true)
  const handleCloseModalBuyNft = () => setActiveModalBuyNft(false)


  return <Players title={t('playerTitle')} box={t('openBox')} onClickOpenBox={openBox} buyCoin={t('buyCoin')} activeModalBuyNft={activeModalBuyNft} handleCloseModalBuyNft={handleCloseModalBuyNft} />
}