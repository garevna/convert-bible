export const notFound = (action, key = 'Building', status = 404) => ({
  status,
  action,
  key,
  error: true,
  errorType: 'Building not found',
  errorMessage: `${key} not found in local DB`
})
