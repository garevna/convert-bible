import { eventsTable } from './config'

export const patchGroupDetails = function (group, details, callback) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'group-update',
    group,
    details
  })

  eventsTable['group-details-updated'] = callback
}
