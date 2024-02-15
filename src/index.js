import { variants } from './configs'

import {
  homenko,
  asv,
  kjb,
  web,
  synodal,
  download
} from './helpers'

const methods = { homenko, asv, kjb, web, synodal }

const main = document.getElementById('container')

for (const item of variants) {
  const { title: innerText, method, textFile } = item

  const elem = Object.assign(main.appendChild(document.createElement('p')), {
    innerText,
    method,
    textFile,
    className: 'button',
    onclick: () => {
      const result = methods[method]()
      console.log(result)
      const fileName = `bible-${method}.json`
      download(JSON.stringify(result), fileName, 'text/plain')
    }
  })
}
