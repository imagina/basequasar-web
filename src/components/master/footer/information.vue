<template>
  <div id="informationFooter" class="bg-grey-12 q-py-xl">
    <div class="row q-container full-height">
      <!--= Logo =-->
      <div class="col-12 col-md-4">
        <div class="text-center desktop-only" style="margin-bottom: 45px">
          <img src="../../../statics/logo-white.png">
        </div>
        <p class="q-mb-none">
          IMAGINA COLOMBIA es una empresa con una trayectoria de más de 10 años,
          dedicada al desarrollo de sitios  Web personalizados totalmente administrables,
          Contamos con un equipo de trabajo con un alto grado de profesionalidad,
          íntegro y responsable.
        </p>
      </div>

      <div class="col-12 col-md-2"></div>

      <!--= Menu =-->
      <div class="col-12 col-md-2 desktop-only">
        <menu-footer></menu-footer>
      </div>

      <div class="col-12 col-md-1"></div>

      <!--= Contacto =-->
      <div class="contacto col-12 col-md-3">
        <span class="text-weight-bold desktop-only"
              style="font-size: 18px">
          Contacto
        </span>

        <div class="block">
          <q-icon name="fas fa-home"></q-icon>
          Calle 29 #7-54, Belalcazar
          <div>Ibagué - Colombia</div>
        </div>

        <div class="block">
          <q-icon name="fas fa-phone"></q-icon>
          2664999 <span class="mobile-only">-</span>
          <div>300 782 63 87 - 316 396 12 95</div>
        </div>

        <div class="block">
          <q-icon name="fas fa-envelope"></q-icon>
          soporte@imaginacolombia.com
        </div>

        <!-- Redes Sociales -->
        <div class="block">
          <social-buttons color="white"></social-buttons>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /*Component*/
  import menuFooter from '@imagina/qmenu/_components/menu-footer'
  import socialButtons from 'src/components/master/socialButtons'

  export default {
    props: {},
    components: {
      menuFooter,
      socialButtons
    },
    watch: {},
    mounted() {
      this.$nextTick(function () {
      })
    },
    data() {
      return {
        sidebar: [],
      }
    },
    methods: {}

  }
</script>
<style lang="stylus">
  @import "~variables";
  #informationFooter
    color #DDDDDD
    min-height 365px
    p
      text-align justify
      line-height 1.4
    .q-item
      padding 0
      .q-item-side
        min-width auto
      .q-item-main
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      &:hover
        .q-item-side
          color $grey-12
      &:first-child
        display none
    .router-link-active
      .q-item-side
        color $grey-12
        padding-left 15px

    .contacto
      .q-icon
        margin-right 10px
      .block
        margin-top 28px
        div
          margin-top 6px
          @media screen and (max-width: $breakpoint-md)
            margin 0
            display inline-block
        &:first-of-type
          margin-top 35px !important
        &:last-of-type
          .q-icon
            margin-right 30px
        @media screen and (max-width: $breakpoint-md)
          margin-top 10px !important
    @media screen and (max-width: $breakpoint-md)
      min-height auto
      padding 20px 0
</style>
