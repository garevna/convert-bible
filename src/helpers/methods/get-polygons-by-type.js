import { eventsTable, buildingEvents } from './config'

export const getPolygonsByType = function (key, callback) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'polygons',
    key
  })

  eventsTable[`${key}-${buildingEvents.polygons}`] = callback
}
