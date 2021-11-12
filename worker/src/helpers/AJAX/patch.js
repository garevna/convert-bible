import { hostHandler, apiKeyHandler, credentialsHandler } from '../../env'
// import { headers } from './'
import { forbidden, remoteServerError } from '../../errors'

const message = {
  message: true,
  messageType: 'Update',
  messageText: 'Data successfully updated'
}

export const patch = async function (endpoint, id, data) {
  if (!hostHandler() || !apiKeyHandler()) {
    return {
      status: 409,
      action: 'patch',
      error: true,
      errorType: 'Worker configuration',
      errorMessage: 'Missing map-worker settings'
    }
  }

  if (!credentialsHandler()) return forbidden

  const response = await fetch(`${hostHandler()}/${endpoint}/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: apiKeyHandler(),
      Credentials: credentialsHandler(),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const resp = { status: response.status, action: 'patch', result: (await response.json()).data }

  return Object.assign(resp, response.status === 200 ? message : remoteServerError)
}
