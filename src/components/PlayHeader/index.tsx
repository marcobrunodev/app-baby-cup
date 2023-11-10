import { useTranslation } from 'react-i18next'
import PlayHeader from './PlayHeader'
import { link } from './PlayHeader.types'

export default () => {
  const { t } = useTranslation()
  const children: string[] = t('linksPlay').split(',')
  const links: link[] = children.map((children) => ({ children, href: `${children.toLocaleLowerCase().replace(/ /g, '').trim()}` }))

  return <PlayHeader button={t('walletConnect')} links={links} />
}