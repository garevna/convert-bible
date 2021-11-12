import { buildingTypes } from '../../configs'

const getMarker = (type) => buildingTypes[type] ? buildingTypes[type].marker : null

export const workerPolygonsCallback = function (data) {
  event.stopImmediatePropagation()
  const { status, key, type, result } = data
  return emitEvent('polygons-received', { status, key, type, result })
}
