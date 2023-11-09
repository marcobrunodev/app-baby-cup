import { useTranslation } from 'react-i18next'
import InfoButton from './InfoButton'

export default () => {
  const { t } = useTranslation()

  return <InfoButton contentButton={t('buyCoin')} />
}