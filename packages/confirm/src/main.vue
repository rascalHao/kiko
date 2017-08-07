<template>
  <transition name="bounce">
    <div class="kiko-confirm" v-if="visible">
      <div class="bg"></div>
      <div class="kiko-container" :style="{width: width}">
        <div class="header">
          {{title}}
          <i @click="close" class="icon-remove icon-large kiko-close-btn" v-if="closeVisible"></i>
        </div>
        <div class="content">
          <slot></slot>
        </div>
        <slot name="footer">
          <!-- <div class="kiko-footer" slot="footer">
            <a href="javscript:void(0)" class="kiko-btn make-sure">确定</a>
            <a href="javscript:void(0)" class="kiko-btn cancel">取消</a>
          </div> -->
        </slot>
      </div>
    </div>
  </transition>
</template>

<script type="text/javascript">
  import '../../../lib/icon/css/font-awesome.css'
  export default {
    name: 'kiko-confirm',
    props: {
      width: {
        type: String,
        default: '260px'
      },
      title: {
        type: String,
        default: '信息'
      },
      visible: {
        type: Boolean,
        default: false
      },
      closeVisible: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
      }
    },
    methods: {
      close () {
        this.$emit('update:visible', false)
      }
    }
  }
</script>

<style type="text/css">
  .bounce-enter-active {
   -webkit-transform: scale(2);
    -moz-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
    opacity: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }
  .bounce-leave-active {
    -webkit-transform: scale(2);
    -moz-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
    opacity: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }
  @keyframes bounce-in {
    -webkit-transform: scale(2);
    -moz-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
    opacity: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }
  .kiko-confirm {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999;
  }
  .kiko-confirm .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /*background-color: #FFFFFF;*/
    background-color: #000;
    opacity: 0.3;
    z-index: 99999;
  }
  .kiko-confirm .kiko-container {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 260px;
    min-width: 260px;
    z-index: 9999999999999;
  }
  .kiko-confirm .kiko-container .header {
    width: 100%;
    padding: 10px;
    background-color: #4575A6;
    border-bottom: 1px solid #eee;
    color: #fff;
    text-align: left;
  }
  .kiko-confirm .kiko-container .content {
    width: 100%;
    padding: 10px;
    background-color: #FFFFFF;
  }
  .kiko-confirm .kiko-container .kiko-footer {
    width: 100%;
    padding: 10px;
    background-color: #FFFFFF;
    text-align: right;
    border-top: 1px solid #eee;
  }
  .kiko-btn {
    padding: 5px 15px;
    text-decoration: none !important;
    border-radius: 2px;
    margin: 6px 6px 0 6px;
  }
  .kiko-btn:hover {
    text-decoration:  none !important;
  }
  .kiko-btn:active {
    text-decoration:  none !important;
  }
  .kiko-btn.make-sure {
    background-color: #4575A6;
    color: #fff;
  }
  .kiko-btn.cancel {
    background-color: #BBB5B5;
    color: #fff;
  }
  .kiko-close-btn {
    cursor: pointer;
    float: right;
  }
</style>
