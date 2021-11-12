export const patchError = (status = 400, address = 'building') => ({
  status,
  action: 'patch',
  key: address,
  error: true,
  errorType: `Update ${address} details`,
  errorMessage: 'Operation failed'
})
