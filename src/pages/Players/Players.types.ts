import { MouseEventHandler } from "react"

export type PlayersTypes = {
  title: string,
  box: string,
  buyCoin: string,
  onClickOpenBox: MouseEventHandler,
  activeModalBuyNft: boolean,
  handleCloseModalBuyNft: MouseEventHandler
}

export default PlayersTypes