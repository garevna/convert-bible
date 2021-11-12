import { comboboxStyles } from '../styles'
import { comboboxTemplate } from '../templates'
import { getVariants } from './getVariants'
import { emitEvent } from '../helpers'
import { spinner } from './spinner'

class CustomCombobox extends HTMLElement {
  constructor () {
    super()
    const shadow = this.attachShadow({ mode: 'closed' })
    const styles = shadow.appendChild(document.createElement('style'))
    styles.textContent = comboboxStyles
    const wrapper = shadow.appendChild(document.createElement('div'))
    wrapper.innerHTML = comboboxTemplate
    this.listContainer = wrapper.querySelector('#listbox')
    this.variants = []
    const spinnerImage = wrapper.querySelector('#spinner-image')
    spinnerImage.src = spinner
    spinnerImage.style.display = "none"

    this.selectedAddressId = null

    this.inputElement = Object.assign(wrapper.querySelector('#combo'), {
      onclick: function (event) {
        if (this.variants.length > 0) {
          this.listContainer.style.display = 'block'
        }
      }.bind(this),
      oninput: async function (event) {
        if (event.target.value.length < 4) return
        event.target.style.paddingLeft = '48px'
        spinnerImage.style.display = "inline-block"
        this.variants = await getVariants(event.target.value)

        this.listContainer.innerHTML = ''

        if (this.variants.length > 0) {
          this.listContainer.style.display = 'block'
        }

        this.variants.forEach(function (option) {
          const elem = this.listContainer.appendChild(document.createElement('li'))
          elem.innerText = option.address
          elem.id = option.id
          elem.style.cursor = 'pointer'
          elem.onclick = function (event) {
            this.inputElement.value = event.target.innerText
            this.selectedAddressId = event.target.id
            this.listContainer.style.display = 'none'
            emitEvent('address-selected', {
              address: event.target.innerText,
              id: event.target.id
            })
          }.bind(this)
        }.bind(this))

        spinnerImage.style.display = "none"
        this.inputElement.style.paddingLeft = '12px'
      }.bind(this)
    })
    this.listbox = wrapper.querySelector('#listbox')
  }

  setOptions (options) {
    this.listbox.innerHTML = ''
    for (const option in options) {
      const elem = this.listbox.appendChild(document.createElement('li'))
      elem.className = 'combo-option'
      elem.innerText = option.name
    }
  }
}

CustomCombobox.prototype.styles = comboboxStyles

if (!customElements.get('custom-combo-box')) customElements.define('custom-combo-box', CustomCombobox)

export default document.createElement('custom-combo-box')
