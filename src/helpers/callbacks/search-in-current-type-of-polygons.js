import { polygonTypes } from '../../configs'

export const searchInCurrentTypeOfPolygons = function () {
  const [lng, lat] = window[Symbol.for('map.searchResult')].coordinates

  const latLng = new window.google.maps.LatLng(lat, lng)

  for (const feature of polygons) {
    const polygon = new window.google.maps.Polygon({ paths: feature.coordinates.map(coord => new window.google.maps.LatLng(coord[1], coord[0])) })

    if (window.google.maps.geometry.poly.containsLocation(latLng, polygon)) {

      const { marker } = polygonTypes[key]

      window[Symbol.for('map.marker')].setIcon(marker)
      window[Symbol.for('map.marker')].visible = true
      return 200
    }
  }
}
