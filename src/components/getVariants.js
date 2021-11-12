import { GEOSCAPE_API_KEY } from '../../env'

export const getVariants = async function (val) {
  const variants = (await (await fetch(`https://api.psma.com.au/v1/predictive/address?maxNumberOfResults=20&query=${encodeURIComponent(val)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: GEOSCAPE_API_KEY
    }
  })).json()).suggest
  return variants || []
}
