import { BUILDINGS_API_KEY, ADMIN_CREDENTIALS } from './env.js'

import { startWorker } from './dist/start-worker'

import DgtekMap from './dist/dgtek-portal-map-package'

import { mapComponent, buildingDetails } from './www'

import {
  refreshButton,
  listButton,
  tableButton,
  createButton,
  updateButton,
  groupUpdateButton,
  deleteButton,
  detailsButton,
  addressButton,
  select
} from './www/buttons'

window.addEventListener('dgtek-portal-map-package-error', function (event) {
  console.warn(event)
})

const publicPath = process.env.NODE_ENV === 'development' ? 'dist' : ''
const host = 'https://dgtek-staging.herokuapp.com'

const worker = startWorker(publicPath, host, BUILDINGS_API_KEY, ADMIN_CREDENTIALS, 'SuperAdmin')

worker.searchCallback = function (data) {
  console.log('SEARCH CALLBACK DATA:\n', data)
  buildingDetails(data)

  deleteButton.disabled = detailsButton.disabled = addressButton.disabled = !data.buildingId
  createButton.disabled = !deleteButton.disabled

  createButton.disabled && Object.assign(select, { value: data.status, disabled: false })
}

setTimeout(() => mapComponent(new DgtekMap({ container: document.getElementById('container-for-map') })))
