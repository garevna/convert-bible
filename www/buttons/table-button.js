import { mapComponent } from '../'

const callback = function (data) {
  console.log('Buildings list for table\n', data)
}

export const tableButton = Object.assign(document.getElementById('get-buildings-for-table'), {
  onclick: function (event) {
    window[Symbol.for('map.worker')].getBuildingsListForTable('build', callback)
  }
})
