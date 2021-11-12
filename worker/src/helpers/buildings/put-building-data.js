import { put } from '../AJAX'
import { putRecordByKey } from '../db'
import { storeNames } from '../../configs'

import { deleteBuildingFromLocalDB, getBuildingDataById } from './'

const action = 'put'

export const putBuildingData = async function (buildingId, data) {
  const key = buildingId

  let response = await getBuildingDataById(buildingId)
  if (response.status !== 200) return getError(response.status, buildingId)

  Object.assign(response.result, { ...data })

  response = await put('building', buildingId)

  if (response.status !== 200) return putError(response.status, data.address)

  const { address, addressComponents, coordinates, distanceFromFootprint, estimatedServiceDeliveryTime, status } = await response.json()

  const store = storeNames[status]

  const result = await putRecordByKey(store, address, { address, addressComponents, coordinates, estimatedServiceDeliveryTime, status, _id: buildingId })

  if (result.status !== 200) return putError(result.status, data.address)

  return { action, key, status: response.status, result }
}
