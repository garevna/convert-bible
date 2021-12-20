import { eventsTable, buildingEvents } from './config'

export const refresh = function (callback) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'refresh'
  })

  eventsTable[buildingEvents.refresh] = callback
}
