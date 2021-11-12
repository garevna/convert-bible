import { openDB } from './openDB'

export const putRecordByKey = async (storeName, recordKey, payload) => new Promise((resolve) => {
  openDB().then((response) => {
    const { status, result: db } = response
    if (status !== 200) {
      resolve({ status, result: 'Open local DB error' })
      return
    }
    const store = db.transaction([storeName], 'readwrite').objectStore(storeName)
    Object.assign(store.put(payload, recordKey), {
      onsuccess: () => resolve({ status: 200, result: payload }),
      onerror: () => resolve({ status: 400, result: null, error: true, errorType: 'Local DB error', errorMessage: `Failed to save data to local DB: ${recordKey}` })
    })
  })
})
