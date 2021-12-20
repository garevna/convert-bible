import { eventsTable, buildingEvents } from './config'

export const getBuildingsListForTable = function (key, callback) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'table',
    key
  })

  Object.assign(eventsTable, { [`${key}-${buildingEvents.table}`]: callback })
}
