export const types = {
  lit: {
    event: 'on-net',
    buildingStatus: 'LIT',
    polygonStatus: 'ServiceAvailable'
  },
  footprint: {
    event: 'footprint',
    buildingStatus: 'Footprint',
    polygonStatus: 'ServiceAvailable'
  },
  build: {
    event: 'construction-commenced',
    buildingStatus: 'BuildCommenced',
    polygonStatus: 'UnderConstruction'
  },
  soon: {
    event: 'coming-soon',
    buildingStatus: 'ComingSoon',
    polygonStatus: 'ComingSoon'
  },
  other: {
    event: 'not-available',
    buildingStatus: 'Other',
    polygonStatus: null
  }
}
