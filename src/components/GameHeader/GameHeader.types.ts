export type link = {
  href: string,
  children: string,
  active: boolean
}

export type GameHeaderTypes = {
  button: string,
  links: link[]
}

export default GameHeaderTypes