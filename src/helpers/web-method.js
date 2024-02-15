import { english } from './english'

const { web: text } = require('../assets')

export function web () {
  return english(text)
}
