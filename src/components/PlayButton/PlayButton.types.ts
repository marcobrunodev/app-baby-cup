import { MouseEventHandler } from "react"

export type PlayButtonTypes = {
  children: string,
  onClick: MouseEventHandler,
  disabled?: boolean
}

export default PlayButtonTypes