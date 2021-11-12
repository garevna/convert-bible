export const buildingDetails = (
  function () {
    let details = {}
    return function (value) {
      if (value) { details = value } else return details
    }
  }
)()
