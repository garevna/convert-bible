const select = document.getElementById('change-building-status')

const callback = function () {
  console.log('GROUP DETAILS UPDATED')
}

const group = [
  '610be2f82f826f00131ab18f',
  '6173947369f3dca233f6acf5',
  '61509fd61e16d600161477a4',
  '617394b969f3dca233f6ad05'
]

const getEstimatedServiceDeliveryTime = () => {
  const start = Math.max(Math.round(Math.random() * 7), 1)
  const finish = Math.max(Math.round(Math.random() * 9), start + 1)
  return `${start}-${finish} weeks`
}

export const groupUpdateButton = Object.assign(document.getElementById('group-update-button'), {
  onclick: function (event) {
    const estimatedServiceDeliveryTime = getEstimatedServiceDeliveryTime()
    console.log(select.value, estimatedServiceDeliveryTime)
    window[Symbol.for('map.worker')].patchGroupDetails(group, { status: select.value, estimatedServiceDeliveryTime }, callback)
  }
})
