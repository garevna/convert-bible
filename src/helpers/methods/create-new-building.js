import { eventsTable, buildingEvents } from './config'

export const createNewBuilding = function (buildingDetails, callback) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'post',
    data: buildingDetails
  })

  eventsTable[buildingEvents.post] = callback
}
