export const addressTransform = function (address) {
  const index = address.indexOf(', Australia')
  const transformed = index !== -1 ? address.slice(0, index - address.length) : address
  return transformed.toLocaleUpperCase()
}
