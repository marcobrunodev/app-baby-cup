import { useTranslation } from 'react-i18next'
import Banner from './Banner'

export default () => {
  const { t } = useTranslation()

  return <Banner buyCoin={t('bannerTitle')} whitepaper={t('whitepaper')} />
}