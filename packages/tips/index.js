import Vue from 'vue'
import ToolTip from './src/main.vue'

ToolTip.installToolTip = function(event, opt) {

  let options = opt

  let toolTip = Vue.extend(ToolTip)

  let component = new toolTip({
    data: options
  }).$mount()
  event.target.appendChild(component.$el)
    // document.querySelector('body').appendChild(component.$el)
}

export default ToolTip
