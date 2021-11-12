import { emitEvent, drawPolygons } from '../'

export const workerInitCallback = function (event) {
  event.stopImmediatePropagation()
  drawPolygons()
  return emitEvent('map-worker-is-ready', event.data)
}
