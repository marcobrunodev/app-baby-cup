import { useTranslation } from 'react-i18next'
import Footer from './Footer'

export default () => {
  const { t } = useTranslation()

  return <Footer children={t('footer')} />
}