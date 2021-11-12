import { eventsTable } from './'

import { buildingEvents } from './building-events'
import { workerDebugCallback, workerSearchCallback } from '../../callbacks'

export const globalCallback = function (event) {
  const { action, status, key, result } = event.data
  if (status === 300) return workerDebugCallback(event)

  let eventName = action === 'polygons' || action === 'list' || action === 'table' ? `${key}-${buildingEvents[action]}` : buildingEvents[action]

  if (action === 'search') return workerSearchCallback(key, result)

  if (action === 'remove') window[Symbol.for('map.searchResult')].buildingId = null

  if (!eventsTable[eventName]) return console.warn('Map worker unknown event', action, event.data)
  if (typeof eventsTable[eventName] !== 'function') return console.warn('Error: callback is not a function', eventName, event.data)

  eventsTable[eventName](event.data.result)
  delete eventsTable[eventName]
}
