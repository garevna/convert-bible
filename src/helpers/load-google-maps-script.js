import { GOOGLE_MAPS_API_KEY } from '../../env'

export function loadGoogleMapsScript () {
  const script = Array.from(document.getElementsByTagName('script')).find(item => item.src.indexOf('https://maps.googleapis.com/maps/api/js') !== -1)
  if (script) script.remove()
  return new Promise((resolve) => {
    const script = document.body.appendChild(document.createElement('script'))
    script.id = 'google-maps-script'
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=geometry,drawing,places`
    script.onload = resolve.bind(null, true)
    script.onerror = resolve.bind(null, false)
  })
}
