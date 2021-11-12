export const buildingEvents = {
  init: 'map-worker-is-ready',
  refresh: 'buildings-refreshed',
  list: 'address-list-received', /* by type only: lit, footprint, build, soon, other */
  table: 'table-data-received', /* by type only: lit, footprint, build, soon, other */
  details: 'building-details-received',
  address: 'building-details-received',
  post: 'new-building-created',
  patch: 'building-details-updated',
  'group-update': 'group-details-updated',
  put: 'building-details-updated',
  remove: 'building-deleted',

  polygons: 'polygons-received', /* by type only: service-available, build-commenced, coming-soon */

  search: 'search-result-received'
}
