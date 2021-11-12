import { eventsTable } from './config'

export const patchBuildingDetails = function (buildingId, buildingDetails, callback) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'patch',
    key: buildingId,
    data: buildingDetails
  })

  eventsTable['building-details-updated'] = callback
}
