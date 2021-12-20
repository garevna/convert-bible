import { eventsTable, buildingEvents } from './config'

export const getBuildingDetailsByAddress = function (address, callback) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'address',
    key: address
  })

  eventsTable[buildingEvents.address] = callback
}
