import { mapComponent } from '../'

const callback = details => console.log('GET BY ADDRESS: ', details)

export const addressButton = Object.assign(document.getElementById('get-building-by-address'), {
  disabled: true,
  onclick: function (event) {
    const { address } = window[Symbol.for('map.searchResult')]
    address && window[Symbol.for('map.worker')].getBuildingDetailsByAddress(address, callback)
  }
})
