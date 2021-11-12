import { getPolygonsByType } from './'
import { polygonEndpoints } from '../../configs'

export const polygonsSearch = async function (lat, lng) {
  for (const endpoint of polygonEndpoints) {
    getPolygonsByType(endpoint)
  }
}
