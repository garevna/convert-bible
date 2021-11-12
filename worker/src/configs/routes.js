const {
  mapController,
  polygonsController,
  buildingsController
} = require('../controllers')

export const routes = {
  init: mapController.init /* request body: { host, apiKey, credentials, role } */,

  refresh: buildingsController.refresh,
  list: buildingsController.getList, /* by type only: lit, footprint, build, soon, other */
  table: buildingsController.getBuildingsListForTable, /* by type only: lit, footprint, build-commenced, coming-soon, other */
  search: buildingsController.search, /* by address */
  details: buildingsController.getBuildingDataById,
  address: buildingsController.getBuildingDataByAddress,
  put: buildingsController.put, /* by id only */
  post: buildingsController.post, /* by id only */
  patch: buildingsController.patch, /* by id only */
  remove: buildingsController.remove, /* by id only */

  'group-update': buildingsController.groupUpdate,

  polygons: polygonsController.getPolygonsByType
}
