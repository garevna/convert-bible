import { routes } from './configs'

function callback (event) {
  const { action } = event.data
  if (!routes[action] || typeof routes[action] !== 'function') return self.postMessage({ status: 422, action, result: 'Invalid request' })
  routes[action](event.data)
}

self.onmessage = callback
