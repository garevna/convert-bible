import { mapComponent } from '../'

export const refreshButton = Object.assign(document.getElementById('refresh-buildings'), {
  onclick: function (event) {
    console.log('REFRESHING...')
    // mapComponent().refresh(() => console.log('REFRESHED!!!'))
    window[Symbol.for('map.worker')].refresh(() => console.log('BUILDINGS REFRESHED!!!'))
  }
})
