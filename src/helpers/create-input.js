import { emitEvent } from './'
import combobox from '../components/combobox'

import { wrapperStyle, getSubmitButtonStyle } from '../styles'
import { snackBarTemplate, icon } from '../templates'

export function createInput (container) {
  const wrapper = container.appendChild(document.createElement('div'))
  wrapper.innerHTML = `
    <table width="100%">
      <tr>
        <td id="container-for-combo-box" width="80%">
        </td>
        <td id="container-for-button"></td>
      </tr>
    </table>

    ${snackBarTemplate}
  `

  wrapper.id = 'dgtek-wrapper'
  wrapper.style = wrapperStyle
  const input = document.getElementById('container-for-combo-box').appendChild(combobox)

  const callback = function (event) {
    document.getElementById('snack-bar').style.display = 'none'
    event.target.removeEventListener('input', callback)
  }
  input.addEventListener('input', callback)

  const button = Object.assign(document.getElementById('container-for-button').appendChild(document.createElement('button')), {
    innerHTML: window.innerWidth >= 690 ? 'SUBMIT' : icon,
    style: getSubmitButtonStyle(document.getElementById('dgtek-wrapper').offsetHeight),
    onmouseover: event => Object.assign(event.target.style, { background: '#9D2309' }),
    onmouseout: event => Object.assign(event.target.style, { background: '#881F1A' }),
    onclick: function (event) {
      window[Symbol.for('map.searchResult')].address
        && window[Symbol.for('map.searchResult')].coordinates[0] && window[Symbol.for('map.searchResult')].coordinates[1]
          && window[Symbol.for('map.worker')].searchCallback(window[Symbol.for('map.searchResult')])
    }
  })

  return input
}
