import Vue from 'vue'
import ToolTip from './src/main.vue'

ToolTip.installToolTip = function(event, opt) {
  console.log(opt)
  console.log(event)
  console.log(event.target)
  console.log(event.target.offsetWidth)
  let targetWidth = event.target.offsetWidth
  let targetHeight = event.target.offsetHeight
  console.log(event.target.offsetHeight)
  console.log(event.target.offsetTop)

  let options = opt

  options.targetWidth = targetWidth
  options.targetHeight = targetHeight

  let toolTip = Vue.extend(ToolTip)

  let component = new toolTip({
    data: options
  }).$mount()
  event.target.appendChild(component.$el)
    // document.querySelector('body').appendChild(component.$el)
}

export default ToolTip
