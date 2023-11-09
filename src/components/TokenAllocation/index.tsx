import { useTranslation } from 'react-i18next'
import TokenAllocation from './TokenAllocation'

export default () => {
  const { t } = useTranslation()

  return <TokenAllocation title={t('tokenAllocationTitle')} button={t('buyCoin')} />
} 