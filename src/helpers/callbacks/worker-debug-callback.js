export const workerDebugCallback = function (event) {
  event.stopImmediatePropagation()
  const { status, ...data } = event.data
  return console.log('DEBUGGING MESSAGE FROM WORKER:\n', data)
}
