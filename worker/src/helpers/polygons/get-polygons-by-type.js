import { get } from '../AJAX'

export const getPolygonsByType = async function (request) {
  const response = await get(`polygons/${request.key}`)

  if (response.status !== 200) return Object.assign(response, { action: 'polygons' })

  return {
    status: response.status,
    action: 'polygons',
    key: request.key,
    type: response.result[0].properties.typeOf,
    result: response.result.map(polygon => ({ coordinates: polygon.geometry.coordinates[0] }))
  }
}
