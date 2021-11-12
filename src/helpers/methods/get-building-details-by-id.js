import { eventsTable } from './config'

export const getBuildingDetailsById = function (buildingId, callback) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'details',
    key: buildingId
  })

  eventsTable['building-details-received'] = callback
}
