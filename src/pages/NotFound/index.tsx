import { useTranslation } from 'react-i18next'
import NotFound from './NotFound'

export default () => {
  const { t } = useTranslation()

  return <NotFound title={t('notFoundTitle')} home={t('home')} play={t('playGame')} />
}