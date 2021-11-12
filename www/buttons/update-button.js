import { mapComponent, buildingDetails } from '../'

const select = document.getElementById('change-building-status')

const callback = function (response) {
  console.log(response)
  if (response.error) {
    console.error(`${response.errorType}\n${response.errorMessage}`)
  } else {
    console.log('Data successfully updated')
    console.log('Building details: ', response)
  }
}

export const updateButton = Object.assign(document.getElementById('update-building-details'), {
  disabled: true,
  onclick: function (event) {
    event.target.disabled = true
    const { _id: buildingId } = buildingDetails()
    console.log(buildingId, buildingDetails())
    if (!buildingId) return callback({ error: true, errorType: 'Update building details', errorMessage: 'Building id required' })
    window[Symbol.for('map.worker')].patchBuildingDetails(buildingId, buildingDetails(), callback)
  }
})
