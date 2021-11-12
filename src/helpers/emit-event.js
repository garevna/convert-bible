export const emitEvent = function (eventName, eventData) {
  const event = new Event(eventName)
  event.data = eventData

  window[Symbol.for('map.worker')].dispatchEvent(event)
  window[Symbol.for('map.container')].dispatchEvent(event)
}
