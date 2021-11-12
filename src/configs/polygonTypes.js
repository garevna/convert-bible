import {
  footprintMarker,
  buildMarker,
  soonMarker
} from './markers'

class PolygonTypes {
  constructor () {
    this['service-available'] = {
      status: 'Footprint',
      polygon: 'ServiceAvailable',
      event: 'footprint',
      color: '#A00E0D',
      marker: footprintMarker
    }

    this['build-commenced'] = {
      status: 'BuildCommenced',
      polygon: 'BuildCommenced',
      event: 'construction-commenced',
      color: '#000000',
      marker: buildMarker
    }

    this['coming-soon'] = {
      status: 'ComingSoon',
      polygon: 'ComingSoon',
      event: 'coming-soon',
      color: '#88880090',
      marker: soonMarker
    }
  }

  getStatus (endpoint) {
    return this[endpoint].status
  }

  getPolygonEndpoint (polygon) {
    const endpoint = Object.keys(this).find(function (key) { return this[key].polygon === polygon }, this)
    console.log(endpoint)
    return endpoint
  }
}

export const polygonTypes = new PolygonTypes

// export const polygonTypes = {
//   'service-available': {
//     status: 'Footprint',
//     polygon: 'ServiceAvailable',
//     event: 'footprint',
//     color: '#A00E0D',
//     marker: footprintMarker
//   },
//   'build-commenced': {
//     status: 'UnderConstruction',
//     polygon: 'BuildCommenced',
//     event: 'construction-commenced',
//     color: '#000000',
//     marker: buildMarker
//   },
//   'coming-soon': {
//     status: 'ComingSoon',
//     polygon: 'ComingSoon',
//     event: 'coming-soon',
//     color: '#ffff9990',
//     marker: soonMarker
//   }
// }

// export const polygonTypes = {
//   ServiceAvailable: {
//     status: 'Footprint',
//     endpoint: 'service-available',
//     event: 'footprint',
//     color: '#A00E0D',
//     marker: footprintMarker
//   },
//   BuildCommenced: {
//     status: 'UnderConstruction',
//     endpoint: 'build-commenced',
//     event: 'construction-commenced',
//     color: '#000000',
//     marker: buildMarker
//   },
//   ComingSoon: {
//     status: 'ComingSoon',
//     endpoint: 'coming-soon',
//     event: 'coming-soon',
//     color: '#ffff9990',
//     marker: soonMarker
//   }
// }
