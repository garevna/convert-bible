import { clearStore, putRecordsToCollection } from '../db'
import { get } from '../AJAX'
import { buildingEndpoints, statusNames } from '../../configs'

// import { offlineError, remoteServerError, localError } from '../../errors'

import { getBuildingUniqueCode } from './'

const [action, title] = ['refresh', 'Refresh buildings data']

const error = {
  action,
  error: true,
  errorType: title
}

const remoteError = Object.assign(error, {
  status: 500,
  errorMessage: 'Operation failed: remote server error'
})

const localError = Object.assign(error, {
  status: 400,
  errorMessage: 'Operation failed: local DB error'
})

export const refreshBuildings = async () => {
  if (!navigator.onLine) return offlineError(action, 'received')

  await Promise.all(Object.keys(statusNames).map(storeName => clearStore(storeName)))

  for (const endpoint of buildingEndpoints) {
    var page = 0
    do {
      var response = await get(`building/${endpoint}?per_page=50&page=${page + 1 || 1}`)

      if (response.status !== 200) return remoteError

      var { page, pages, result } = await response

      if (!result || !result.length) continue

      const resolved = await putRecordsToCollection(result)

      if (!resolved || !Array.isArray(resolved) || resolved.filter(item => item.status !== 200).length) return localError
    } while (page < pages)
  }

  return { status: 200, action }
}
