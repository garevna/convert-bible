export const apiKeyHandler = (function () {
  let apiKey = ''
  return function (value) {
    if (value) { apiKey = value } else  return apiKey
  }
})()
