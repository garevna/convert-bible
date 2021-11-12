import { hostHandler, apiKeyHandler, credentialsHandler } from '../../env'
import { forbidden, remoteServerError } from '../../errors'

const message = {
  message: true,
  messageType: 'Create new',
  messageText: 'Data successfully created'
}

export const post = async function (endpoint, data) {
  if (!hostHandler() || !apiKeyHandler()) {
    return {
      status: 409,
      action: 'post',
      error: true,
      errorType: 'Worker configuration',
      errorMessage: 'Missing map-worker settings'
    }
  }

  if (!credentialsHandler()) return forbidden

  const response = await fetch(`${hostHandler()}/${endpoint}`, {
    method: 'POST',
    headers: {
      Authorization: apiKeyHandler(),
      Credentials: credentialsHandler(),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const resp = { status: response.status, action: 'post', result: (await response.json()).data }

  return Object.assign(resp, response.status === 200 ? message : remoteServerError)
}
