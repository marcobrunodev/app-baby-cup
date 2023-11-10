import { useTranslation } from 'react-i18next'
import Players from './Players'

export default () => {
  const { t } = useTranslation()

  return <Players title={t('playerTitle')} />
}