# Kiko

> 一个基于vue.js的弹窗组件

## Usage

### Message

Message为一个消息提示框，默认3秒钟消失

| Parameter | Type | Description |
| -------- | ------- | ------ |
| message | string | 提示内容 |
| time | number | 消失时间 |

eg:

```
    this.$kiko_message('这是一个message')
    若想改变消失时间
    this.$kiko_message({
      message: '这是一个message',
      time: 3000
    })
```

### ToolTip

可以自定义事件来触发toolTip，没有选择通过固化在页面中的方式来引入toolTip,因为考虑到可能在页面中的任何地方引入toolTip,如果固化了，将会大大限制toolTip的使用场景。所以采用了一个绑定到Vue.prototype的this.$kiko_tooltip全局方法来触发，这样就可以自定义触发方式，只需要通过传入$event就可以自动地定位任何有需要的元素了。但要将元素进行定位（eg:relative、absolute）在每一次创建时，会检测先前是否渲染过toolTip,若渲染过会自动注销。kiko_tooltip默认为在右侧。可以在初始化时，传入方向、背景色,若未传，则使用默认值。

| Parameter | Type | Description |
| --------| ------- | -------- |
| content | string | 提示内容 |
| direction | string | toolTip显示的方向 |
| bacground | string | 背景色 |
| time | number | 消失时间 |

eg:

```
    this.$kiko_tooltip($event, {
        content: '这是一个toolTip',
        direction: 'top',
        background: '#13CE66',
        time: 3000
      })
```
