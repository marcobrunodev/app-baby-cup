import { useTranslation } from 'react-i18next'
import Header from './Header'
import { link } from './Header.types'

export default () => {
  const { t } = useTranslation()
  const children: string[] = t('links').split(',')
  const links: link[] = children.map((children) => ({ children, href: `${children.toLocaleLowerCase().replace(/ /g, '').trim()}` }))

  return <Header links={links} playGame={t('playGame')} />
}