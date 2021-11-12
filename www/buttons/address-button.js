import { mapComponent } from '../'

const callback = details => console.log(details)

export const addressButton = Object.assign(document.getElementById('get-building-by-address'), {
  disabled: true,
  onclick: function (event) {
    const { address } = window[Symbol.for('map.searchResult')]
    console.log(address)
    address && window[Symbol.for('map.worker')].getBuildingDetailsByAddress(address, callback)
  }
})
