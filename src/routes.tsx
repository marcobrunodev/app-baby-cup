import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Play from './pages/Play'

const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
},
{
  path: '/game/players',
  element: <Play />
},
{
  path: '*',
  element: <NotFound />
}
])

export default router