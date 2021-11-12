import { eventsTable } from './config'

const action = 'init'

const initError = {
  action,
  status: 422,
  error: true,
  errorType: 'Map worker init error',
  errorMessage: 'Invalid request: insufficient data. API host url, API key and user credentials required.'
}

const callback = function (event) {
  window[Symbol.for('map.worker')].refresh(() => {
    window[Symbol.for('map.worker')].ready = true
  })
}

export const init = function (apiHost, apiKey, credentials, role, callback) {
  if (!apiHost || !apiKey || !credentials) return initError

  window[Symbol.for('map.worker')].postMessage({ action, data: { host: apiHost, key: apiKey, credentials, role } })

  eventsTable['map-worker-is-ready'] = callback
}
