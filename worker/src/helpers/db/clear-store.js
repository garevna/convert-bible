import { openDB } from './openDB'

export const clearStore = (storeName) => new Promise((resolve) => {
  openDB().then((response) => {
    const { status, result: db } = response
    if (status !== 200) {
      resolve({ status, result: null })
      return
    }
    const store = db.transaction([storeName], 'readwrite').objectStore(storeName)
    Object.assign(store.clear(), {
      onsuccess: event => resolve({
        status: 200,
        result: null
      }),
      onerror: event => resolve({ status: 704, result: `Cleaning ${storeName}: operation failed` })
    })
  })
})
