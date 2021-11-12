import { snackBarStyles } from '../styles'

export const snackBarTemplate = `
<style>${snackBarStyles}</style>

<div class="snack" id="snack-bar">
  <div class="snack__wrapper">
    <div class="snack-bar-content" role="status" aria-live="polite">
      Please enter BUILDING address only. Do not include unit/apartment number
    </div>
  </div>
</div>
`
