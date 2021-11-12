import {
  mapConfig,
  options
} from '../configs'

import { loadGoogleMapsScript } from './'

export const createMap = async function () {
  if (!await loadGoogleMapsScript()) return { status: 500, result: 'Error accessing Google Maps API' }

  const center = options.center && options.center.lat && options.center.lng
    ? new window.google.maps.LatLng(options.center.lat, options.center.lng)
    : new window.google.maps.LatLng(-37.87013628, 144.963058)

  window[Symbol.for('map.instance')].map = new window.google.maps.Map(window[Symbol.for('map.container')], {
    center,
    zoom: 13,
    styles: mapConfig,
    disableDefaultUI: true
  })

  const marker = new window.google.maps.Marker({
    position: center,
    map: window[Symbol.for('map.instance')].map,
    title: 'DGtek provisioning portal',
    icon: null
  })

  marker.visible = false

  window[Symbol.for('map.marker')] = marker

  return { status: 200 }
}
