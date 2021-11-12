export const hostHandler = (function () {
  let host = ''
  return function (value) {
    if (value) { host = value } else return host
  }
})()
