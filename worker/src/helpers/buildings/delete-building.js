import { get, remove } from '../AJAX'
import { deleteRecordFromStore } from '../db'
import { storeNames } from '../../configs'

const action = 'remove'

const error = {
  action,
  result: null,
  error: true,
  errorType: 'Delete bulding'
}

const getError = Object.assign(error, {
  status: 404,
  errorMessage: 'Operation failed: building was not found'
})

const deleteError = address => Object.assign(error, {
  status: 500,
  errorType: address,
  errorMessage: 'Operation failed: remote server error'
})

const localError = address => Object.assign(error, {
  status: 400,
  errorType: address,
  errorMessage: 'Operation failed: local DB error'
})

const message = address => ({
  status: 200,
  action,
  message: true,
  messageType: address,
  messageText: 'The building has been deleted'
})

export const deleteBuilding = async (buildingId) => {
  if (!navigator.onLine) return { status: 0, result: 'Offline mode: Data has not been saved. Try later' }

  let response = await get(`building/${buildingId}`)

  if (response.status !== 200) return getError

  const { address, status } = response.result

  const storeName = storeNames[status]

  if ((await remove(`building/${buildingId}`)).status !== 200) return deleteError(address)

  if ((await deleteRecordFromStore(storeName, address)).status !== 200) return localError(address)

  return { status: 200, action, store: storeName, key: address, result: true }
}
