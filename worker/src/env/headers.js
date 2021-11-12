import { apiKeyHandler, credentialsHandler } from './'

export const headers = (function () {
  let headers = null
  return function (value) {
    if (value) {
      if (apiKeyHandler() && credentialsHandler()) {
        headers = {
          Authorization: apiKeyHandler(),
          Credentials: credentialsHandler(),
          'Content-Type': 'application/json'
        } else {
          return {
            status: 409,
            action: 'headers',
            error: true,
            errorType: 'Map worker error',
            errorMessage: 'Worker configuration failed'
          }
        }
      }
    } else return headers
  }
})()
