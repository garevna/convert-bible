import { openDB } from './openDB'

export const deleteRecordFromStore = (storeName, recordKey) => new Promise((resolve) => {
  openDB().then((response) => {
    const { status, result: db } = response
    if (status !== 200) {
      resolve({ status, result: null })
      return
    }

    const store = db.transaction([storeName], 'readwrite').objectStore(storeName)
    Object.assign(store.delete(recordKey), {
      onsuccess: event => resolve({
        action: 'delete',
        store: storeName,
        key: recordKey,
        status: 200,
        result: null
      }),
      onerror: event => resolve({ status: 400, result: event.target.error })
    })
  })
})
