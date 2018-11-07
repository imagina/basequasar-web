<template>
  <div id="socialButtons">
    <a target="_blank" :style="'margin-right:'+gutter"
       href="https://www.facebook.com/imaginacol">
      <q-icon name="fab fa-facebook" :color="color"></q-icon>
    </a>
    <a target="_blank" :style="'margin-right:'+gutter"
       href="https://twitter.com/imaginacolombia">
      <q-icon name="fab fa-twitter" :color="color"></q-icon>
    </a>
    <a target="_blank" :style="'margin-right:'+gutter"
       href="https://www.instagram.com/imagina_colombia/">
      <q-icon name="fab fa-instagram" :color="color"></q-icon>
    </a>
    <a target="_blank"
       href="https://www.youtube.com/channel/UCZA9gQP6lt2b5Qg3d8XQD1A">
      <q-icon name="fab fa-youtube" :color="color"></q-icon>
    </a>
  </div>
</template>
<script>
  export default {
    props: {
      gutter : {default : '10px'},
      color: {default:'secondary'}
    },
    components: {},
    watch: {},
    mounted() {
      this.$nextTick(function () {
      })
    },
    data() {
      return {}
    },
    methods: {}

  }
</script>
<style lang="stylus">
  @import "~variables";
  #socialButtons
    a
      text-decoration none
</style>
