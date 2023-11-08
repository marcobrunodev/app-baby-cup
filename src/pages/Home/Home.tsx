import Header from '../../components/Header'
import Banner from '../../components/Banner'
import S from './Home.styles'
import Track from '../../components/Track'

const Home = () => (
  <>
    <S.Home>
      <Header />
      <Banner />
    </S.Home>
    <Track />
  </>
)

export default Home