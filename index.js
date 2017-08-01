import KikoMessage from './packages/message/index.js'
import KikoToolTip from './packages/tips/index.js'

const install = function(Vue) {
  Vue.component(KikoMessage.name, KikoMessage)
  Vue.component(KikoToolTip.name, KikoToolTip)

  Vue.prototype.$kiko_tooltip = KikoToolTip.installToolTip
  Vue.prototype.$kiko_message = (options) => {
    if (options === undefined || options === null) {
      options = {
        message: ''
      }
    } else if (typeof options === 'string' || typeof options === 'number') {
      options = {
        message: options
      }
    }
    let message = Vue.extend(KikoMessage)

    let component = new message({
      data: options
    }).$mount()
    document.querySelector('body').appendChild(component.$el)
  }
}

export default install
