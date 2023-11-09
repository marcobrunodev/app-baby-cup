import Header from '../../components/Header'
import Banner from '../../components/Banner'
import S from './Home.styles'
import Track from '../../components/Track'
import Suplly from '../../components/Info'
import InfoButton from '../../components/InfoButton'

const Home = () => (
  <>
    <S.Home>
      <Header />
      <Banner />
    </S.Home>
    <Track />

    <S.InfosCoin>
      <Suplly />
      <InfoButton />
    </S.InfosCoin>
  </>
)

export default Home