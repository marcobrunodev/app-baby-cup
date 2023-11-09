import { useTranslation } from 'react-i18next'
import CoreTeam from './CoreTeam'
import cesar from '../../assets/cesar.png'

export default () => {
  const { t } = useTranslation()

  return <CoreTeam title={t('coreTeamTitle')}
    avatarSrc={cesar}
    avatarAlt='César Boaventura'
    position='CEO'
    name='César Boaventura'
    instagramHref='https://instagram.com/cesar__boaventura'
  />
}