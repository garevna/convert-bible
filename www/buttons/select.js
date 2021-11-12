import { buildingDetails } from '../'

const updateButton = document.getElementById('update-building-details')

export const select = Object.assign(document.getElementById('change-building-status'), {
  // disabled: true,
  value: 'LIT',
  onchange: function (event) {
    console.log(event.target.value)
    buildingDetails(Object.assign(buildingDetails(), { status: event.target.value }))
    updateButton.disabled = false
  }
})
