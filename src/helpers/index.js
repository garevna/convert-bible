import { init } from './methods/init'
import { initGlobalVariables } from './init-global-variables'
import { createMap } from './create-map'
import { createInput } from './create-input'
import { geocodeAddress } from './geocode-address'
import { drawPolygons } from './draw-polygons'
import { loadGoogleMapsScript } from './load-google-maps-script'
import { polygonSearch } from './polygon-search'
// import { checkAvailable } from './check-available'
// import { workerCallback } from './worker-callback'
import { emitEvent } from './emit-event'

import { createMapInstance } from './create-map-instance'

import { clearResults } from './clear-results'

import { addressTransform } from './address-transform'

// import { workerSearchCallback } from './worker-search-callback'
// import { workerPolygonsCallback } from './worker-polygons-callback'

export {
  init,
  initGlobalVariables,

  // workerSearchCallback,
  // workerPolygonsCallback,

  createMap,
  createInput,
  geocodeAddress,
  drawPolygons,
  loadGoogleMapsScript,
  polygonSearch,
  // checkAvailable,
  // workerCallback,
  emitEvent,

  createMapInstance,

  addressTransform,
  clearResults
}
