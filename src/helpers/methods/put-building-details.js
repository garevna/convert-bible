import { eventsTable } from './config'

export const putBuildingDetails = function (buildingId, buildingDetails, callback) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'put',
    key: buildingId,
    data: buildingDetails
  })

  eventsTable['building-details-updated'] = callback
}
