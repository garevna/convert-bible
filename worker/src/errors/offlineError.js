export const offlineError = (action, text = 'saved') =>({
  status: 0,
  action,
  error: true,
  errorType: 'Offline',
  message: `Offline mode: Data has not been ${text}. Try later`,
  result: `Offline mode: Data has not been ${text}. Try later`
})
