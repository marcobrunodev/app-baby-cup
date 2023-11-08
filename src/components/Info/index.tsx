import { useTranslation } from 'react-i18next'
import Info from './Info'

export default () => {
  const { t } = useTranslation()

  return <Info title={t('supplyTitle')} value={t('supplyValue')} />
} 