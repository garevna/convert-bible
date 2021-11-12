import { searchBuilding, getBuildingDataById } from './'

const action = 'address'

const errorResponse = (status = 404, address = 'Building') => ({
  status,
  store: 'Not found',
  action,
  key: address,
  result: null,
  error: true,
  errorType: 'Search building by address',
  errorMessage: `${address} was not found`
})

export const getBuildingDataByAddress = async (address) => {
  const response = await searchBuilding(address)

  if (response.status !== 200) return errorResponse(response.status, address)

  const { status: remoteStatus, store, result: buildingData } = await getBuildingDataById(response.result._id)

  return { status: remoteStatus, action, store: response.store, key: address, result: buildingData }
}
