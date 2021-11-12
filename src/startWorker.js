import * as methods from './helpers/methods'
import { buildingEvents, globalCallback } from './helpers/methods/config'

let externalCallback = () => console.log('Map worker is ready')

const initCallback = function (event) {
  console.log('Map worker configured')
  window[Symbol.for('map.worker')].refresh(refreshCallback)
}

const refreshCallback = function (event) {
  console.log('Building DB refreshed')
  window[Symbol.for('map.worker')].ready = true
  externalCallback()
}

export const startWorker = function (publicPath, host, apiKey, credentials, role, callback) {
  window[Symbol.for('map.worker')] = Object.assign(new Worker(publicPath ? `${publicPath}/map.worker.js` : 'map.worker.js'), {
    onerror: error => console.warn('Map worker error:\n', error),
    onmessage: globalCallback,
    ready: false,
    searchCallback: result => console.log(result)
  })

  if (callback && typeof callback === 'function') { externalCallback = callback }

  for (const method in methods) window[Symbol.for('map.worker')][method] = methods[method]

  window[Symbol.for('map.worker')].init(host, apiKey, credentials, role, initCallback)

  return window[Symbol.for('map.worker')]
}
