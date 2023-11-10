import { WagmiConfig } from "wagmi"
import wagmiConfig from "./configs/wagmiConfig"
import { RouterProvider } from "react-router-dom"
import router from "./routes"

const App = () => (
  <WagmiConfig config={wagmiConfig}>
    <RouterProvider router={router} />
  </WagmiConfig>
)

export default App