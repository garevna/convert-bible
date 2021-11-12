import { getAll } from '../db'
import { statusNames, types } from '../../configs'
import { getBuildingUniqueCode } from './get-building-unique-code'

const action = 'table'

export const getBuildingsListForTable = async (key) => {
  if (Object.keys(statusNames).indexOf(key) === -1) return { status: 422, action, key, result: `Invalid request: type ${key} not found` }

  const { status, result } = await getAll(key)

  const data = result.map(item => ({
    id: item._id,
    address: item.address,
    uniqueCode: item.uniqueCode || getBuildingUniqueCode(item.addressComponents),
    buildingName: item.buildingName || '',
    // addressComponents: item.addressComponents,
    estimatedServiceDeliveryTime: item.estimatedServiceDeliveryTime
  }))

  return {
    status,
    action,
    key,
    result: Object.assign(data, {
      event: types[key].event,
      buildingStatus: types[key].buildingStatus,
      polygonStatus: types[key].polygonStatus
    })
  }
}
