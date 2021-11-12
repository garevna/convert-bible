import { mapComponent, buildingDetails } from '../'

import { deleteButton } from './'

const callback = function (buildingId) {
  createButton.disabled = true
  deleteButton.disabled = false
  window[Symbol.for('map.searchResult')].buildingId = buildingId
  console.log('New building Id: ', window[Symbol.for('map.searchResult')])
}

export const createButton = Object.assign(document.getElementById('create-new-building'), {
  disabled: true,
  onclick: function (event) {
    event.target.disabled = true
    if (!buildingDetails() || buildingDetails().buildingId) return
    const { address, addressComponents, coordinates, uniqueCode, estimatedServiceDeliveryTime, status } = buildingDetails()

    window[Symbol.for('map.worker')].createNewBuilding({ address, addressComponents, coordinates, uniqueCode, estimatedServiceDeliveryTime, status }, callback)
  }
})
