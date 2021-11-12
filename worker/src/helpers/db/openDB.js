import { collections } from '../../configs'

export const openDB = () => new Promise((resolve) => Object.assign(indexedDB.open('buildings'), {
  onupgradeneeded: (event) => {
    for (const collectionName of collections) {
      event.target.result.createObjectStore(collectionName)
    }
    return event.target.result
  },
  onsuccess: event => resolve({
    status: 200,
    result: event.target.result
  }),
  onerror: event => resolve({ status: 700, result: null })
}))
