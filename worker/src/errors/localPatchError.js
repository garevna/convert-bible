export const localPatchError = (action, address) => ({
  status: 400,
  action,
  key: address,
  error: true,
  errorType: `Update ${address} details`,
  errorMessage: 'Operation failed: local DB error'
})
