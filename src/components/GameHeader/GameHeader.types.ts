import { MouseEventHandler } from "react"

export type link = {
  href: string,
  children: string,
  active: boolean
}

export type GameHeaderTypes = {
  button: string,
  links: link[],
  onClick: MouseEventHandler
}

export default GameHeaderTypes