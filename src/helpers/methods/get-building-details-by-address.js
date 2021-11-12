import { eventsTable } from './config'

export const getBuildingDetailsByAddress = function (address, callback) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'address',
    key: address
  })

  eventsTable['building-details-received'] = callback
}
