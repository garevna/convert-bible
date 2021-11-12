import { openDB } from './openDB'

export const getAllKeys = (storeName) => new Promise((resolve) => {
  openDB().then((response) => {
    const { status, result: db } = response
    if (status !== 200) {
      resolve({ status, result: null })
      return
    }

    const store = db.transaction([storeName]).objectStore(storeName)

    return Object.assign(store.getAllKeys(), {
      onsuccess: event => resolve({
        status: event.target.result ? 200 : 404,
        result: event.target.result ? event.target.result : `No one key found in db store ${storeName}`
      }),
      onerror: event => resolve({ status: 704, result: event.target.error })
    })
  })
})
