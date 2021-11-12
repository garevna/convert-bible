import { eventsTable } from './config'

export const getBuildingsList = function (key, callback) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'list',
    key
  })

  eventsTable[`${key}-address-list-received`] = callback
}
