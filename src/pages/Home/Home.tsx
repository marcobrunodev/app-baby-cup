import Header from '../../components/Header'
import Banner from '../../components/Banner'
import S from './Home.styles'
import Track from '../../components/Track'
import Suplly from '../../components/Info'
import InfoButton from '../../components/InfoButton'
import WhatIs from '../../components/WhatIs'
import Nfts from '../../components/Nfts'
import CoreTeam from '../../components/CoreTeam'
import TokenAllocation from '../../components/TokenAllocation'
import Footer from '../../components/Footer'
import SocialFixed from '../../components/SocialFixed'

const Home = () => (
  <>
    <SocialFixed />
    <S.Home>
      <Header />
      <Banner />
    </S.Home>
    <Track />

    <S.InfosCoin>
      <Suplly />
      <InfoButton />
    </S.InfosCoin>

    <WhatIs />
    <Nfts />
    <TokenAllocation />
    <CoreTeam />
    <Footer />
  </>
)

export default Home