import { mapComponent } from '../'

const callback = function (data) {
  console.log('Buildings list\n', data)
}

export const listButton = Object.assign(document.getElementById('get-buildings-list'), {
  onclick: function (event) {
    window[Symbol.for('map.worker')].getBuildingsList('lit', callback)
  }
})
