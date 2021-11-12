import { polygonTypes, notAvailableMarker } from '../configs'
import { getPolygonsByType } from './methods'

const endpoints = Object.keys(polygonTypes)
let found = false
let foundType = ''

const searchInCurrentPolygons = function (key, polygons) {
  const [lng, lat] = window[Symbol.for('map.searchResult')].coordinates

  const latLng = new window.google.maps.LatLng(lat, lng)

  for (const feature of polygons) {
    const polygon = new window.google.maps.Polygon({ paths: feature.coordinates.map(coord => new window.google.maps.LatLng(coord[1], coord[0])) })

    if (window.google.maps.geometry.poly.containsLocation(latLng, polygon)) {
      window[Symbol.for('map.marker')].setIcon(polygonTypes[key].marker)
      window[Symbol.for('map.marker')].visible = true
      window[Symbol.for('map.searchResult')].status = polygonTypes[key].status === 'UnderConstruction' ? 'BuildCommenced' : polygonTypes[key].status

      window[Symbol.for('map.worker')].searchCallback(window[Symbol.for('map.searchResult')])

      return 200
    }
  }
  console.log('NOT FOUND IN POLYGONS!!!')
  window[Symbol.for('map.marker')].setIcon(notAvailableMarker)
}

export async function polygonSearch (lat, lng) {
  window[Symbol.for('map.worker')].addEventListener('polygons-received', searchInCurrentPolygons)

  window[Symbol.for('map.searchResult')].status = 'Other'

  for (const endpoint of endpoints) {
    window[Symbol.for('map.worker')].getPolygonsByType(endpoint, searchInCurrentPolygons.bind(null, endpoint))
  }
}
