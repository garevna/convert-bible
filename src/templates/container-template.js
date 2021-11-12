import { spinner, openInNew, geoscapeIcon } from '../assets'

export const containerTemplate = `
  <table width="100%" style="position: relative">
    <tr>
      <td width="48">
        <img id="spinner" src="${spinner}" width="32" style="display: none" />
        <img id="google-maps-icon" src="${geoscapeIcon}" style="vertical-align: middle" />
      </td>
      <td id="container-for-combo-box" width="80%">
        <input id="google-autocomplete-input" />
      </td>
      <td width="20%">
        <button id="submit-button">
          SUBMIT
        </button>
      </td>
    </tr>
  </table>

  <div id="address-on-map-link" style="max-width: 180px; margin: 0 auto">
    <img src="${openInNew}" style="vertical-align: middle; color: #999" />
    <span style="color: #999">Look at the map</span>
  </div>
`
