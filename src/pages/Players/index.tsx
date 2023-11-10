import { useTranslation } from 'react-i18next'
import Players from './Players'

export default () => {
  const { t } = useTranslation()

  const openBox = () => {

  }

  return <Players title={t('playerTitle')} box={t('openBox')} onClickOpenBox={openBox} buyCoin={t('buyCoin')} />
}