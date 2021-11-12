import { mapContainerStyle } from './styles'
import { options } from './configs'
import { emitEvent, drawPolygons } from './helpers'

import {
  initGlobalVariables,
  initCallback,
  createMapInstance,
  workerCallback,
  geocodeAddress
} from './helpers'

initGlobalVariables()

class DgtekMap {
  constructor (options) {
    if (!window[Symbol.for('map.worker')]) {
      const errorEvent = new CustomEvent('dgtek-portal-map-package-error', {
        detail: {
          errorType: 'Map worker is not defined',
          errorMessage: 'You need start map.worker.js before this app'
        }
      })
      window.dispatchEvent(errorEvent)
      return
    }

    window[Symbol.for('map.instance')] = this

    this.options = {}
    if (options.container) {
      for (const option in options) {
        if (option === 'container') {
          this.container = options.container.nodeType === 1 ? options.container : this.options.container
        } else this.options[option] = options[option]
      }
    }

    window[Symbol.for('map.container')] = this.container

    this.mapContainer = this.container.appendChild(document.createElement('div'))
    this.mapContainer.style = mapContainerStyle

    const { status, result } = createMapInstance()

    drawPolygons()
  }
}

Object.assign(DgtekMap.prototype, options, {
  setSearchCallback: function (callback) {
    window[Symbol.for('map.worker')].searchCallback = callback && typeof callback === 'function' ? callback : event => console.log(event)
  }
})

export default DgtekMap
