# Kiko

> 一个基于vue2.0的弹窗组件(PC)

![](https://dr5mo5s7lqrtc.cloudfront.net/items/211R3u2S271D322u2b2u/introduction.gif?X-CloudApp-Visitor-Id=6f7dbfc2165658575196df8d07c08cc0&v=7c11ce67)

## Installation
### You can install it via NPM.

```
  npm i kiko-rascalhao -S

  import Kiko from 'kiko-rascalhao'

  Vue.use(Kiko)
```

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

可以自定义事件来触发toolTip，没有选择通过固化在页面中的方式来引入toolTip,因为考虑到可能在页面中的任何地方引入toolTip,如果固化了，将会大大限制toolTip的使用场景。所以采用了一个绑定到Vue.prototype的this.$kiko_tooltip全局方法来触发，这样就可以自定义触发方式，只需要通过传入$event就可以自动地定位任何有需要的元素了。kiko会根据当前触发元素的位置自动定位，会检测先前是否渲染过toolTip,若渲染过会自动注销。kiko_tooltip默认为在右侧。可以在初始化时，传入方向、背景色、字体颜色,若未传，则使用默认值。

| Parameter | Type | Description |
| --------| ------- | -------- |
| content | string | 提示内容 |
| direction | string | toolTip显示的方向(top、right、bottom、left) |
| bacground | string | 背景色 |
| color | string | 字体颜色 |
| time | number | 消失时间 |

eg:

```
    this.$kiko_tooltip($event, {
        content: '这是一个toolTip',
        direction: 'top',
        background: '#13CE66',
        color: '#fff',
        time: 3000
      })
```

### confirm

confirm在保留页面的情况下会弹出一个对话框，适合一些场景更大的情况。可以用来进行一些复杂带校验的弹窗信息展示，也可以只用于简单信息的展示。可以通过title属性来显示任意标题，通过width属性来修改显示区域的宽度。

| Parameter | Type | Description |
| --------| ------- | -------- |
| visible | Boolean | 是否显示弹窗,支持 .sync 修饰符 |
| close-visible | Boolean | 是否显示关闭按钮 |
| width | String | 弹窗的宽度 |

eg:

```
  <kiko-confirm width="500px" title="信息" :visible.sync="confirmVisible" :close-visible="true">
    <h1>谁的青春不迷茫</h1>
    <div class="kiko-footer" slot="footer">
      <a href="javascript:void(0)" class="kiko-btn make-sure" @click="confirmMakeSure">确定</a>
      <a href="javascript:void(0)" class="kiko-btn cancel" @click="confirmVisible = false">取消</a>
    </div>
  </kiko-confirm>
```

### Loading

考虑到可能不需要整屏渲染,只需要局部加载loading,在指定的位置可以按需通过指令v-kiko-loading来实现，kiko会根据需要的元素位置、区域大小自动定位；若想整屏渲染，则只需通过.fullscreen修饰符，这样就可以整屏渲染loading。

| Parameter | Type | Description |
| --------| ------ | ----- |
| v-kiko-loading | Boolean | 指令 |
| fullscreen | Boolean | v-kiko-loading的修饰符 |

eg:

```
    <!--全屏-->
    <p v-kiko-loading.fullscreen="loadingFullscreen">
      <button class="btn btn-info"style="position: relative" @click="loadingFullscreen = !loadingFullscreen">loadingFullscreen</button>
    </p>

    <!--指定位置按需渲染-->
    <p>
      <button class="btn btn-info"style="position: relative" @click="loading = !loading">loading</button>
    </p>
    <p v-kiko-loading="loading" style="position: relative">
      <pre>
        假如爱情可以解释
        誓言可以修改
        假如
        你我的相遇 可以重新安排
        那么 生活就会比较容易
        假如
        有一天 我终于能将你忘记
        然而 这不是 随便传说的故事
        也不是明天才要 上演的戏剧
        我无法找出原稿
        然后将你 将你一笔抹去
      </pre>
    </p>

    export default {
      data () {
        return {
          loading: false,
          loadingFullscreen: false
        }
      }
    }
```
