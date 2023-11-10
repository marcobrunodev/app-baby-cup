import { useTranslation } from 'react-i18next'
import GameHeader from './GameHeader'
import { link } from './GameHeader.types'

export default () => {
  const { t } = useTranslation()
  const children: string[] = t('linksPlay').split(',')
  const links: link[] = children.map((children) => ({ children, href: `${children.toLocaleLowerCase().replace(/ /g, '').trim()}`, active: false }))

  return <GameHeader button={t('walletConnect')} links={links} />
}