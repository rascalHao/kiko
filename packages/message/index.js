import Vue from 'vue'
import Message from './src/main.vue'

Message.installMessage = (options) => {
  if (options === undefined || options === null) {
    options = {
      message: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      message: options
    }
  }
  let message = Vue.extend(Message)

  let component = new message({
    data: options
  }).$mount()
  document.querySelector('body').appendChild(component.$el)
}

export default Message
