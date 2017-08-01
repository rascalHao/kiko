<template>
  <div v-if="isShow" id="kiko_tool_tip" class="kiko-tool-tip" :class="{'left': direction === 'left', 'right': direction === 'right', 'top': direction === 'top', 'bottom': direction === 'bottom'}" :style="{'background-color': background}">
    <div class="content">{{content}}</div>
    <div class="arrow" :style="arrowStyleObject"></div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'kikoToolTip',
    data () {
      return {
        isShow: true,
        time: 3000,
        content: '',
        direction: 'right',
        background: 'red',
        arrowStyleObject: ''
      }
    },
    beforeMount () {
      let node = document.querySelector('#kiko_tool_tip')
      if (node && node.parentNode) {
        node.parentNode.removeChild(node)
      }
    },
    mounted () {
      this.initColor()
      this.hidden()
    },
    methods: {
      initColor () {
        console.log(this.direction)
        switch (this.direction.toLowerCase()) {
          case 'left':
            this.arrowStyleObject = {
              borderLeftColor: this.background
            }
            break;
          case 'right':
            this.arrowStyleObject = {
              borderRightColor: this.background
            }
            break;
          case 'top':
            this.arrowStyleObject = {
              borderTopColor: this.background
            }
            break;
          case 'bottom':
            this.arrowStyleObject = {
              borderBottomColor: this.background
            }
            break;
        }

      },
      hidden () {
        let that = this
        window.setTimeout(function(){
          that.isShow = false
        }, this.time)
      }
    }
  }
</script>

<style type="text/css">
  .kiko-tool-tip {
    display: block;
    position: absolute;
    background-color: #3695CC;
    padding: 10px 10px;
    border-radius: 5px;
    color: #fff;
    white-space: normal;
    word-wrap: break-word;
    z-index: 99999999
  }
  .kiko-tool-tip.left {
    top: 50%;
    left: -10px;
    transform: translate(-100%, -50%);
  }
  .kiko-tool-tip.right {
    top: 50%;
    right: -10px;
    transform: translate(100%, -50%);
  }
  .kiko-tool-tip.top {
    top: -10px;
    left: 50%;
    transform: translate(-50%, -100%);
  }
  .kiko-tool-tip.bottom {
    bottom: -10px;
    left: 50%;
    transform: translate(-50%, 100%);
  }
  .kiko-tool-tip.right .arrow {
    display: inline-block;
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: 50%;
    left: -10px;
    border-top: 10px solid transparent;
    /*border-left: 10px solid yellow;*/
    border-right: 15px solid #3695CC;
    border-bottom: 10px solid transparent;
    transform: translate(0, -50%);
  }
  .kiko-tool-tip.left .arrow {
    display: inline-block;
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: 50%;
    right: -10px;
    border-top: 10px solid transparent;
    border-left: 15px solid #3695CC;
    border-bottom: 10px solid transparent;
    transform: translate(0, -50%);
  }
  .kiko-tool-tip.top .arrow {
    display: inline-block;
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    left: 50%;
    bottom: -10px;
    border-top: 15px solid #3695CC;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    transform: translate(-50%, 0);
  }
  .kiko-tool-tip.bottom .arrow {
    display: inline-block;
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    left: 50%;
    top: -10px;
    border-bottom: 15px solid #3695CC;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    transform: translate(-50%, 0);
  }
</style>
