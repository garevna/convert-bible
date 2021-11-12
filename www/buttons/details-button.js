import { mapComponent, buildingDetails } from '../'

const callback = function (data) {
  console.log(data)
}

export const detailsButton = Object.assign(document.getElementById('get-building-details'), {
  disabled: true,
  onclick: function (event) {
    const { buildingId } = window[Symbol.for('map.searchResult')]
    console.log(buildingId)
    buildingId && window[Symbol.for('map.worker')].getBuildingDetailsById(buildingId, callback)
  }
})
