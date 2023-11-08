import Header from '../../components/Header'
import Banner from '../../components/Banner'
import S from './Home.styles'
import Track from '../../components/Track'
import Suplly from '../../components/Info'

const Home = () => (
  <>
    <S.Home>
      <Header />
      <Banner />
    </S.Home>
    <Track />
    <Suplly />
  </>
)

export default Home