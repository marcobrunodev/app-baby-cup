import { useTranslation } from 'react-i18next'
import ModalBuyNft from './ModalBuyNft'
import ModalBuyNftTypes from './ModalBuyNft.types'

export default ({ active, handleClose }: Pick<ModalBuyNftTypes, 'active' | 'handleClose'>) => {
  const { t } = useTranslation()

  return <ModalBuyNft title={t('modalBuyNftTitle')} price={t('nftPrice')} description={t('modalBuyNftDescription')} button={t('buyNow')} active={active} handleClose={handleClose} />
}