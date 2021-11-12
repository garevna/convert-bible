import { putRecordByKey } from './'
import { storeNames } from '../../configs'

export const putRecordsToCollection = async function (records) {
  const promises = []

  const storeName = storeNames[records[0].status]

  for (const record of records) {
    const { address } = record
    promises.push(putRecordByKey(storeName, address, record))
  }
  return  await Promise.all(promises)
}
