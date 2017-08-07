<template>
  <div class="kiko-loading" :style="{'top': top, 'left': left, 'width': width, 'height': height}">
    <div class="bg"></div>
    <div class="kiko-container">
      <i class="icon-spinner icon-spin icon-4x"></i>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'kiko-loading',
    data () {
      return {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }
    }
  }
</script>

<style type="text/css">
  .kiko-loading {
    color: #45B0FF;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .kiko-loading .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0.7;
    z-index: 999;
  }
  .kiko-loading .kiko-container {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999999999999;
  }
</style>
