export const getStatus = eventType => {
  return {
    'on-net': 'LIT',
    footprint: 'Footprint',
    'construction-commenced': 'BuildCommenced',
    'coming-soon': 'ComingSoon',
    'not-available': 'Other'
  }[eventType]
}
