import { GEOSCAPE_API_KEY } from '../../env'
import { clearResults } from './'

export const geocodeAddress = async function (addressId) {
  clearResults()
  const response = await (await fetch(`https://api.psma.com.au/v1/addresses/${addressId}?include=geo,addressDetails`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: GEOSCAPE_API_KEY
    }
  })).json()

  const {
    streetNumber1: number1,
    streetNumber2: number2,
    localityName: city,
    postcode: postCode,
    stateTerritory: state,
    streetName: street,
    streetType,
    siteName,
    cadastralIdentifier
  } = response.addressDetails

  const number = `${number1 || ''}${number1 && number2 ? '-' : ''}${number2 || ''}`

  const result = {
    coordinates: response.geo.geometry.coordinates,
    address: response.addressDetails.formattedAddress,
    addressComponents: { city, number1, number2, number, postCode, state, street, streetType, siteName, cadastralIdentifier },
    relatedBuildingIds: response.relatedBuildingIds
  }

  Object.assign(window[Symbol.for('map.searchResult')], {
    address: result.address,
    coordinates: result.coordinates,
    addressComponents: Object.assign({}, result.addressComponents)
  })

  window[Symbol.for('map.worker')].postMessage({
    action: 'search',
    key: response.addressDetails.formattedAddress
  })

  window[Symbol.for('map.marker')].setPosition({ lat: result.coordinates[1], lng: result.coordinates[0] })
  window[Symbol.for('map.marker')].visible = true
  window[Symbol.for('map.instance')].map.panTo({ lat: result.coordinates[1], lng: result.coordinates[0] })
  window[Symbol.for('map.instance')].map.setZoom(15)

  return {
    status: 200,
    result
  }
}
