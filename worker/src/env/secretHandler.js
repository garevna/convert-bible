export const secretHandler = (function () {
  let secret = ''
  return function (value) {
    if (!value) return secret
    secret = value
  }
})()
