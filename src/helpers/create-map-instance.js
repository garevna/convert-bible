import { createMap, createInput, geocodeAddress } from './'

export async function createMapInstance () {
  const { status, result } = await createMap()

  if (status !== 200) return { status, result }

  createInput(window[Symbol.for('map.container')])

  window[Symbol.for('map.container')].addEventListener('address-selected', function (event) {
    geocodeAddress(event.data.id)
  })

  return { status: 200, result: 'Success' }
}
