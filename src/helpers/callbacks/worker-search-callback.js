import { buildingTypes } from '../../configs'
import { polygonSearch } from '../'

const getMarker = (type) => buildingTypes[type] ? buildingTypes[type].marker : null

export const workerSearchCallback = function (store, result) {
  console.log('WORKER SEARCH CALLBACK\n', store, result)

  if (result) {
    window[Symbol.for('map.marker')].setIcon(getMarker(store))
    window[Symbol.for('map.marker')].visible = true

    Object.assign(window[Symbol.for('map.searchResult')], {
      buildingId: result._id,
      status: result.status,
      estimatedServiceDeliveryTime: result.estimatedServiceDeliveryTime,
      uniqueCode: result.uniqueCode,
      buildingName: result.buildingName
    })

    window[Symbol.for('map.worker')].searchCallback(window[Symbol.for('map.searchResult')])
  } else {
    const [lng, lat] = window[Symbol.for('map.searchResult')].coordinates
    polygonSearch(lat, lng)
  }
}
