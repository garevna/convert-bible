import { getRecordByKey } from '../db'
import { statusNames } from '../../configs'

const action = 'search'

export const searchBuilding = async (address) => {
  for (const storeName in statusNames) {
    const { status, result } = await getRecordByKey(storeName, address)

    if (status === 200) return { status, action, key: storeName, address, result }
  }

  return { status: 404, action, key: 'Not found', address, result: null }
}
