export const roleHandler = (function () {
  let role = ''
  return function (value) {
    if (value) { role = value } else return role
  }
})()
