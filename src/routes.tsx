import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Players from './pages/Players'

const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
},
{
  path: '/game/players',
  element: <Players />
},
{
  path: '*',
  element: <NotFound />
}
])

export default router