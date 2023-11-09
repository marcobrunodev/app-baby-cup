import { useTranslation } from 'react-i18next'
import WhatIs from './WhatIs'

export default () => {
  const { t } = useTranslation()

  return <WhatIs title={t('whatIsTitle')} description={t('whatIsDescription')} />
}