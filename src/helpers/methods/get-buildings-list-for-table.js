import { eventsTable } from './config'

export const getBuildingsListForTable = function (key, callback) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'table',
    key
  })

  Object.assign(eventsTable, { [`${key}-table-data-received`]: callback })
}
