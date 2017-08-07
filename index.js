import KikoMessage from './packages/message/index.js'
import KikoToolTip from './packages/tips/index.js'
import KikoConfirm from './packages/confirm/index.js'
import KikoLoading from './packages/loading/index.js'

const install = function(Vue) {
  Vue.component(KikoMessage.name, KikoMessage)
  Vue.component(KikoToolTip.name, KikoToolTip)
  Vue.component(KikoConfirm.name, KikoConfirm)
  Vue.component(KikoLoading.name, KikoLoading)

  Vue.prototype.$kiko_tooltip = KikoToolTip.installToolTip
  Vue.prototype.$kiko_message = KikoMessage.installMessage
}
export default install
