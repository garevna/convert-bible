import { patch } from '../AJAX'
import { putRecordByKey } from '../db'
import { getBuildingUniqueCode, searchBuilding, deleteBuildingFromLocalDB } from './'
import { statusNames} from '../../configs'
import { notFound, putError, offlineError, localPatchError } from '../../errors'

const action = 'group-update'

const remoteError = {
  status: 500,
  action,
  error: true,
  errorType: 'Group update',
  errorMessage: 'Operation failed: remote server error'
}

const buildingStatusError = buildingStatus => ({
  action,
  status: 422,
  error: true,
  errorType: 'Update building details',
  errorMessage: `Invalid building status ${buildingStatus}`
})

const message = {
  action,
  status: 200,
  message: true,
  messageType: 'Group update',
  messageText: `Buildings of group details updated`
}

export const patchGroupData = async function (group, data) {
  let statusChanged = Boolean(data.status)

  if (data.status && !Object.keys(statusNames).map(key => statusNames[key]).includes(data.status)) return buildingStatusError(data.status)

  for (const buildingId of group) {
    const { result } = await patch('building', buildingId, data)

    let { address, addressComponents, coordinates, buildingName, uniqueCode, estimatedServiceDeliveryTime, status, _id } = result

    const storeName = Object.keys(statusNames).find(key => statusNames[key] === status)

    if (statusChanged) await deleteBuildingFromLocalDB(address)

    const response = await putRecordByKey(storeName, address, {
      address,
      addressComponents,
      coordinates,
      buildingName,
      estimatedServiceDeliveryTime,
      status,
      uniqueCode: uniqueCode || getBuildingUniqueCode(addressComponents),
      _id
    })

    if (response.status !== 200) self.postMessage(localPatchError(action, address))
  }

  return Object.assign({}, { status: 200, action }, message)
}
