import { patch } from '../AJAX'
import { putRecordByKey } from '../db'
import { getBuildingUniqueCode, searchBuilding, deleteBuildingFromLocalDB } from './'
import { statusNames} from '../../configs'
import { notFound, putError, offlineError, localPatchError } from '../../errors'

const action = 'patch'

// const localError = (address) => ({
//   status: 400,
//   action,
//   key: address,
//   error: true,
//   errorType: `Update ${address} details`,
//   errorMessage: 'Operation failed: local DB error'
// })

const buildingStatusError = buildingStatus => ({
  action,
  status: 422,
  error: true,
  errorType: 'Update building details',
  errorMessage: `Invalid building status ${buildingStatus}`
})

const message = address => ({
  action,
  status: 200,
  message: true,
  messageType: address,
  messageText: `Building details updated`
})

export const patchBuildingData = async function (buildingId, data) {
  const key = buildingId

  let statusChanged = Boolean(data.status)
  if (data.status && !Object.keys(statusNames).map(key => statusNames[key]).includes(data.status)) return buildingStatusError(data.status)

  const response = await patch('building', buildingId, data)

  if (response.status !== 200) return response

  const { address, addressComponents, coordinates, buildingName, estimatedServiceDeliveryTime, status } = response.result

  const uniqueCode = getBuildingUniqueCode(addressComponents)

  if (statusChanged) await deleteBuildingFromLocalDB(address)

  if (response.status !== 200) return putError('patch', response.status, address)

  const storeName = Object.keys(statusNames).find(key => statusNames[key] === status)

  const result = await putRecordByKey(storeName, address, {
    address,
    addressComponents,
    coordinates,
    buildingName,
    estimatedServiceDeliveryTime,
    status,
    uniqueCode,
    _id: buildingId
  })

  if (result.status !== 200) return localPatchError('patch', address)

  return Object.assign(result, { status: 200, action, key }, message(address))
}
