import {
  secretHandler,
  hostHandler,
  apiKeyHandler,
  credentialsHandler,
  roleHandler
} from '../../env'

export const init = (request) => {
  const action = 'init'
  if (!request.host || !request.key) return { status: 422, action, result: 'Invalid request: Insufficient data' }

  self.postMessage({ status: 300, message: 'INIT that not needed!!!!' })

  // secretHandler(request.secret)
  // hostHandler(request.host)
  // apiKeyHandler(request.key)
  // credentialsHandler(request.credentials)
  // roleHandler(request.role)

  return { status: 200, action, result: 'Success' }
}
