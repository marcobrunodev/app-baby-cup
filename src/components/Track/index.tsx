import { useTranslation } from 'react-i18next'
import Track from './Track'

export default () => {
  const { t } = useTranslation()


  return <Track>{t('addressCoin')}</Track>
}