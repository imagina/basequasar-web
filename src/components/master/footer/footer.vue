<template>
  <q-layout-footer id="footer" class="no-shadow">

    <!--=== INFORMACION ===-->
    <information-footer></information-footer>

    <!--=== COPYRIGHT ===-->
    <div class="copyright q-py-sm q-px-lg bg-grey-13">
      <div :class="'row '+($q.platform.is.desktop ? 'q-container' : '')">
        <div class="col-4 col-md-auto">
          <logo-imagina></logo-imagina>
        </div>
        <div class="col-8 col-md-auto q-pl-md">
          Copyright 2018 © Imagina Derechos Reservados.
        </div>
      </div>
    </div>
  </q-layout-footer>
</template>
<script>
  /*Components*/
  import informationFooter from 'src/components/master/footer/information'
  import logoImagina from 'src/components/master/footer/imaginaSVG'

  export default {
    props: {},
    components: {
      informationFooter,
      logoImagina
    },
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
  #footer
    color #DDDDDD !important
    .copyright
      min-height 74px
      font-size 12px
      padding 18px
      svg
        fill #DDDDDD

</style>
