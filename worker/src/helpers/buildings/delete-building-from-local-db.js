import { deleteRecordFromStore, getRecordByKey } from '../db'

import { storeNames } from '../db/config'

export const deleteBuildingFromLocalDB = async (address) => {
  for (const storeName of storeNames) {
    const { status, result } = await getRecordByKey(storeName, address)
    if (status !== 200) continue
    const response = await deleteRecordFromStore(storeName, address)
    return { status: response.status, action: 'remove', key: address }
  }
}
