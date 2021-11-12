import { eventsTable } from './config'

export const getPolygonsByType = function (key, callback) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'polygons',
    key
  })

  eventsTable[`${key}-polygons-received`] = callback
}
