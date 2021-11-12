import { mapComponent, buildingDetails } from '../'

const createButton = document.getElementById('create-new-building')

const callback = function (data) {
  console.log('BUILDING DELETED:\n', data)
}

export const deleteButton = Object.assign(document.getElementById('delete-building'), {
  disabled: true,
  onclick: function (event) {
    event.target.disabled = true
    const { buildingId } = buildingDetails()
    window[Symbol.for('map.worker')].deleteBuilding(buildingId, callback)
  }
})
