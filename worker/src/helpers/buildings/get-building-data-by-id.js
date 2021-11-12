import { get } from '../AJAX'
import { putRecordByKey } from '../db'
import { getBuildingUniqueCode } from './get-building-unique-code'

const action = 'details'

export const getBuildingDataById = async (buildingId) => {
  const key = buildingId

  const response = await get(`building/${buildingId}`)

  if (response.status !== 200) return Object.assign(response, { action })

  response.result.uniqueCode = response.result.uniqueCode || getBuildingUniqueCode(response.result.addressComponents)

  await putRecordByKey('current', 'data', response.result)

  return { status: response.status, action, store: response.result.status, key, result: response.result }
}
