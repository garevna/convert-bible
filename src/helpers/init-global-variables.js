export const initGlobalVariables = function () {
  window[Symbol.for('map.instance')] = null
  window[Symbol.for('map.container')] = null

  window[Symbol.for('map.searchResult')] = {
    buildingId: null,
    address: null,
    uniqueCode: null,
    status: null,
    addressComponents: null,
    estimatedServiceDeliveryTime: null
  }
}
