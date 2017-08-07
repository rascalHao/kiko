import Vue from 'vue'
import ToolTip from './src/main.vue'

ToolTip.installToolTip = function(event, opt) {

  let options = opt

  let rect = {};
  ['top', 'left'].forEach(property => {
    let scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'
    rect[property] = event.target.getBoundingClientRect()[property] +
      document.body[scroll] +
      document.documentElement[scroll]
  });
  ['height', 'width'].forEach(property => {
    rect[property] = event.target.getBoundingClientRect()[property]
  });
  options.rect = rect
  let toolTip = Vue.extend(ToolTip)

  let component = new toolTip({
    data: options
  }).$mount()
  event.target.appendChild(component.$el)
    // document.querySelector('body').appendChild(component.$el)
}

export default ToolTip
