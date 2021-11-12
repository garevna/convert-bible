export const clearResults = function () {
  window[Symbol.for('map.searchResult')] = {
    address: '',
    buildingId: null,
    addressComponents: {},
    uniqueCode: '',
    estimatedServiceDeliveryTime: '',
    status: null,
    uniqueCode: ''
  }
}
