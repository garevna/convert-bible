export const putError = (status = 400, address = 'building') => ({
  status,
  action: 'put',
  key: address,
  error: true,
  errorType: `Update ${address} details`,
  errorMessage: 'Operation failed'
})
