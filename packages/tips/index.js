import Vue from 'vue'
import ToolTip from './src/main.vue'

ToolTip.installToolTip = function(event, opt) {

  var options = opt

  var rect = {};
  ['top', 'left'].forEach(function(property) {
    var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'
    rect[property] = event.target.getBoundingClientRect()[property] +
      document.body[scroll] +
      document.documentElement[scroll]
  });
  ['height', 'width'].forEach(function(property) {
    rect[property] = event.target.getBoundingClientRect()[property]
  });
  options.rect = rect
  var toolTip = Vue.extend(ToolTip)

  var component = new toolTip({
    data: options
  }).$mount()
  event.target.appendChild(component.$el)
    // document.querySelector('body').appendChild(component.$el)
}

export default ToolTip
