<template>
  <div id="productosComponent"
       style="background-image: url('statics/home-bloque-productos.jpg')"
       :class="this.$q.platform.is.desktop ? 'desktop' : 'mobile'">
    <div class="q-container full-height">
      <div class="row full-height">
        <div class="block col-12 col-lg-5 offset-lg-7 self-center">
          <h4 class="q-ma-none">PRODUCTOS</h4>

          <p>
            Avance tecnológico Colombia cuenta con gran variedad
            de pro-ductos tanto de citofonìa telefonía cableado
            estructurado control de acceso.
          </p>


          <q-scroll-area style="width: 100%; height: 245px;" class="q-mb-lg">
            <q-list>
              <q-item link :key="key" :to="'/'+category.slug"
                      v-for="(category,key) in categories">
                <q-item-side icon="fas fa-check-circle" color="white"/>
                <q-item-main>{{category.title}}</q-item-main>
              </q-item>
            </q-list>
          </q-scroll-area>

          <q-btn label="Ver más" to="/productos"
                 color="white" rounded
                 icon-right="fas fa-arrow-right" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /*Services*/
  import categoriesServices from '@imagina/qblog/_services/categories'

  export default {
    props: {},
    components: {},
    watch: {},
    mounted() {
      this.$nextTick(function () {
        this.getCategories()
      })
    },
    data() {
      return {
        categories : []
      }
    },
    methods: {
      getCategories(){
        let include = 'children'
        let categorySlug = 'productos'
        categoriesServices.show(categorySlug, include).then((response) => {
          this.categories = response.data.children
        })
      }
    }

  }
</script>
<style lang="stylus">
  @import "~variables";
  #productosComponent
    width 100%
    background-color $primary
    background-position: left;
    background-repeat: no-repeat;
    background-size 50% 100%
    &.desktop
      height 610px
    @media screen and (max-width: $breakpoint-md)
      background-image none !important
    .block
      padding 40px 0
      &:first-child
        color white
        p
          margin 20px  0
          text-align justify
          line-height 1.6
          @media screen and (max-width: $breakpoint-lg)
            margin 10px 0
        .q-list
          border 0
          padding-left 25px
          margin-bottom 20px
          .q-item
            padding 5px 16px
            height 35px !important
            min-height auto
            .q-item-side
              .q-icon
                font-size 19px
        .q-btn
          text-transform none
          color $primary !important
          font-weight bold
          .q-focus-helper
            display none !important
          &:hover
            background $secondary !important
            .content
              .img
                background-image none !important
                background-color $secondary !important
                content "TEST"
</style>
