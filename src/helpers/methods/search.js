import { eventsTable } from './config'

import { workerSearchCallback } from '../callbacks'

export const searchAddress = function (address) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'search',
    key: address
  })

  eventsTable['search-result-received'] = workerSearchCallback
}
