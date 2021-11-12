import { hostHandler, apiKeyHandler, credentialsHandler } from '../../env'
import { remoteServerError } from '../../errors'

export const get = async function (endpoint) {
  if (!navigator.onLine) return { status: 0, result: 'Offline mode: Data has not been saved. Try later' }

  if (!hostHandler() || !apiKeyHandler()) {
    return {
      status: 409,
      action: 'get',
      error: true,
      errorType: 'Worker configuration',
      errorMessage: 'Missing map-worker settings'
    }
  }

  const noFound = {
    error: true,
    errorType: endpoint,
    errorMessage: 'Not found'
  }

  const response = await fetch(`${hostHandler()}/${endpoint}`, {
    method: 'GET',
    headers: {
      Authorization: apiKeyHandler(),
      Credentials: credentialsHandler(),
      'Content-Type': 'application/json'
    }
  })

  const result = await response.json()

  const resp = { status: response.status, result: result.data, page: result.page, pages: result.pages }

  return Object.assign(resp, response.status === 200 ? {} : response.status === 404 ? noFound : remoteServerError)
}
