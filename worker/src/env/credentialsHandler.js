export const credentialsHandler = (function () {
  let credentials = ''
  return function (value) {
    if (value) { credentials = value } else return credentials
  }
})()
