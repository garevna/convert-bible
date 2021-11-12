import { hostHandler, apiKeyHandler, credentialsHandler } from '../../env'
import { forbidden, remoteServerError } from '../../errors'

const message = {
  message: true,
  messageType: 'Delete data',
  messageText: 'Data successfully deleted'
}

export const remove = async function (buildingId) {
  if (!hostHandler() || !apiKeyHandler()) {
    return {
      status: 409,
      action: 'remove',
      error: true,
      errorType: 'Worker configuration',
      errorMessage: 'Missing map-worker settings'
    }
  }

  if (!credentialsHandler()) return forbidden

  const response = await fetch(`${hostHandler()}/${buildingId}`, {
    method: 'DELETE',
    headers: {
      Authorization: apiKeyHandler(),
      Credentials: credentialsHandler(),
      'Content-Type': 'application/json'
    }
  })

  const result = await response.json()

  const resp = { status: response.status, action: 'remove', result }

  return Object.assign(resp, response.status === 200 ? message : remoteServerError)
}
