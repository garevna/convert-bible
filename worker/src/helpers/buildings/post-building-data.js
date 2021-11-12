import { buildingSchema, statusNames, storeNames } from '../../configs'

import { post } from '../AJAX'
import { putRecordByKey } from '../db'

import { searchBuilding } from './'

import { offlineError, buildingPostError, localError } from '../../errors'

const action = 'post'

export const postBuildingData = async (data) => {
  if (!navigator.onLine) return offlineError(action, 'saved')

  if (!data.status) return postError(422, 'Building status not defined')

  const storeName = storeNames[data.status]

  if (!storeName) return postError(422, `Invalid building status ${data.status}`)

  if (Object.keys(data).includes('buildingId')) delete data.buildingId

  const searchResult = await searchBuilding(data.address)

  if (searchResult.result) {
    return {
      status: 409,
      action,
      store: storeName,
      key: data.address,
      result: searchResult.result._id,
      message: true,
      messageType: 'Creating new building',
      messageText: `Building ${data.address} already exists`
    }
  }

  const newBuilding = Object.assign(JSON.parse(JSON.stringify(buildingSchema)), data)

  const response = await post('building', newBuilding)

  if (response.status === 403) return response
  if (response.status !== 200) return buildingPostError

  const newBuildingId = response.result

  const { address, addressComponents, coordinates, status, estimatedServiceDeliveryTime = '', buildingName = '', distanceFromFootprint = 0 } = data

  const shortDetails = { address, addressComponents, coordinates, status, estimatedServiceDeliveryTime, _id: newBuildingId }

  const { status: localStatus, result } = await putRecordByKey(storeName, data.address, shortDetails)

  if (localStatus !== 200) return localError

  return { status: 200, action, store: storeName, key: data.address, result: newBuildingId }
}
