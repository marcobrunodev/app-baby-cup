import { MouseEventHandler } from "react"

export type ModalBuyNftTypes = {
  title: string,
  price: string,
  description: string,
  button: string,
  active: boolean,
  handleClose: MouseEventHandler
}

export default ModalBuyNftTypes