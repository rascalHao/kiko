import Vue from 'vue'
import Loading from './src/main.vue'

const loadingConstructor = Vue.extend(Loading)

Vue.directive('kiko-loading', {
  update: function(el, binding) {
    if (binding.oldValue != binding.value) {
      let options = {}
      options.fullScreen = binding.modifiers.fullscreen ? true : false;
      if (options.fullScreen) {
        options.top = 0
        options.left = 0
        options.width = '100%'
        options.height = '100%'
      } else {
        ['top', 'left'].forEach(property => {
          let scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'
          options[property] = el.getBoundingClientRect()[property] +
            document.body[scroll] +
            document.documentElement[scroll] +
            'px'
        });
        ['height', 'width'].forEach(property => {
          options[property] = el.getBoundingClientRect()[property] + 'px'
        });
      }
      let component = new loadingConstructor({
        data: options
      }).$mount()
      let node = document.querySelector('.kiko-loading')
      if (node && node.parentNode) {
        node.parentNode.removeChild(node)
      }
      if (binding.value === true) {
        document.querySelector('body').append(component.$el)
      } else {
        let node = document.querySelector('.kiko-loading')
        if (node && node.parentNode) {
          node.parentNode.removeChild(node)
        }
      }
    }
  }
})

export default Loading
