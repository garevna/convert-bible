import {
  apiKeyHandler,
  credentialsHandler,
  hostHandler,
  roleHandler,
  secretHandler
} from '../env'

// import { headers } from '../helpers/AJAX'

const action = 'init'

class MapController {
  init (request) {
    const { host, key, credentials, role, secret } = request.data

    if (!host) self.postMessage({ status: 422, action, error: true, errorType: 'Init', errorMessage: 'API host required' })
    if (!key) self.postMessage({ status: 422, action, error: true, errorType: 'Init', errorMessage: 'App key for access API required' })
    if (!credentials) self.postMessage({ status: 401, action, error: true, errorType: 'Buildings worker warning', errorMessage: 'Access denied' })

    host && hostHandler(host)
    key && apiKeyHandler(key)
    credentials && credentialsHandler(credentials)
    role && roleHandler(role)
    secret && secretHandler(secret)

    self.postMessage({
      status: 200,
      action,
      host: hostHandler(),
      apiKey: apiKeyHandler(),
      credentials: credentialsHandler(),
      role: roleHandler()
    })
  }

  setAPIHostURL (request) {
    request.host && hostHandler(request.host)
  }

  setAPIKey (request) {
    request.key && apiKeyHandler(request.key)
  }

  setCredentials (request) {
    request.credentials && credentialsHandler(request.credentials)
  }

  setRole (request) {
    request.role && roleHandler(request.credentials)
  }
}

export const mapController = new MapController()
