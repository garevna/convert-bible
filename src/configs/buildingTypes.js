import {
  litMarker,
  footprintMarker,
  buildMarker,
  soonMarker,
  notAvailableMarker
} from './markers'

export const buildingTypes = {
  lit: {
    status: 'LIT',
    event: 'on-net',
    marker: litMarker
  },
  footprint: {
    status: 'Footprint',
    event: 'footprint',
    marker: footprintMarker
  },
  build: {
    status: 'UnderConstruction',
    event: 'construction-commenced',
    marker: buildMarker
  },
  soon: {
    status: 'ComingSoon',
    event: 'coming-soon',
    marker: soonMarker
  },
  other: {
    status: 'Other',
    event: 'not-available',
    marker: notAvailableMarker
  }
}
