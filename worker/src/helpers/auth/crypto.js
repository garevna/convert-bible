import { secretHandler } from '../../env'
import { emptyData, secretError, encryptError, decryptError } from '../../configs'

const crypto = require('crypto-js')

const hash = data => ({ status: 200, result: crypto.SHA256(data).toString() })

const encrypt = (data) => {
  const action = 'encrypt'
  if (!data) return { status: 422, action, result: emptyData }

  const secret = secretHandler()

  if (!secret) return { status: 500, action, result: secretError }

  const result = crypto.AES.encrypt(data, secret).toString()

  return result ? { status: 200, action, result } : { status: 500, action, result: encryptError }
}

const decrypt = (ciphertext) => {
  const action = 'decrypt'
  if (!ciphertext) return { status: 422, action, result: emptyData }

  const secret = secretHandler()

  if (!secret) return { status: 500, action, result: secretError }

  const bytes = crypto.AES.decrypt(ciphertext, secret)
  const text = bytes.toString(crypto.enc.Utf8)

  const result = text.match(/[[]{}]+/g) ? JSON.parse(text) : text

  return result ? { status: 200, action, result } : { status: 500, action, result: decryptError }
}

export {
  hash,
  encrypt,
  decrypt
}
