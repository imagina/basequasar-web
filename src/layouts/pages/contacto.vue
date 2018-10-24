<template>
  <div id="pageInicio" class="q-layout-page">
    <div class="page flex flex-center bg-blue-grey-1">
      <div class="row">
        <div class="col-12">
          <h5>CONTACTO</h5>
        </div>
        <div class="col-12">
          <img alt="Quasar logo" src="statics/logo.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /*Components*/
  import sliderComponent from '@imagina/qslider/_components/slider'
  import serviciosComponent from '@imagina/qblog/_components/widgets/widget-services'
  import nosotrosComponent from 'src/components/pages/home/nosotros'
  import productosComponent from 'src/components/iblog/widgets/widget-products'

  export default {
    props: {},
    components: {
      sliderComponent,
      serviciosComponent,
      nosotrosComponent,
      productosComponent
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
  #pageInicio
    text-align center
    .page
      padding 150px 0
      h5
        margin 10px 0
</style>
