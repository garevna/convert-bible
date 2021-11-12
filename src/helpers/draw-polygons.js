import { polygonTypes } from '../configs'
import { emitEvent } from './'

const endpoints = Object.keys(polygonTypes)
const types = Object.keys(polygonTypes).map(key => polygonTypes[key].polygon)

const ready = endpoints.map(item => ({ [item]: false }))

const drawCurrentPolygons = function (key, polygons) {
  for (const feature of polygons) {
    const polygon = new window.google.maps.Polygon({
      paths: feature.coordinates.map(coord => new window.google.maps.LatLng(coord[1], coord[0])),
      fillColor: polygonTypes[key].color,
      strokeColor: polygonTypes[key].color,
      strokeWeight: 0.3,
      clickable: false,
    })
    polygon.setMap(window[Symbol.for('map.instance')].map)
  }

  ready[key] = true
  if (!endpoints.filter(item => !ready[item]).length) window[Symbol.for('map.worker')].removeEventListener('polygons-received', drawCurrentPolygons)
}

export async function drawPolygons () {
  for (const endpoint of endpoints) {
    window[Symbol.for('map.worker')].getPolygonsByType(endpoint, drawCurrentPolygons.bind(null, endpoint))
  }

  return { status: 200 }
}
