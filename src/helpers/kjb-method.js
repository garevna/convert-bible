import { english } from './english'

const { kjb: text } = require('../assets')

export function kjb () {
  return english(text)
}
