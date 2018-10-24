<template>
  <div id="header">

    <!-- ========================== TOOLBAR ======================================== -->
    <q-layout-header class="no-shadow">
      <q-toolbar color="white" :class="this.$q.platform.is.desktop ? 'q-container' : ''">
        <!--= BUTTON MENU (mobile-only) =-->
        <q-btn flat dense round
               @click="leftDrawerOpen = !leftDrawerOpen"
               class="btn-menu mobile-only"
               color="primary"
               aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>

        <!--= LOGO (desktop-only) =-->
        <q-toolbar-title :class="$q.platform.is.mobile ? 'text-center' : ''">
          <router-link :to="{ name: 'home'}">
              <img src="statics/logo.png" class="desktop-only"></img>
              <img src="statics/logo.png" class="mobile-only q-pt-sm" width="100px"></img>
          </router-link>
        </q-toolbar-title>

        <!--= INFO(desktop-only) =-->
        <information-header class="desktop-only"></information-header>

        <!--= FULLSCREEN(mobile-only) =-->
        <q-btn flat dense color="primary"
               class="mobile-only"
               :icon="$q.fullscreen.isActive ? 'fas fa-compress' : 'fas fa-expand'"
               @click="toggleFullscreen()"></q-btn>

        <!--= Search(desktop-only) =-->
        <search-component class="mobile-only"></search-component>
      </q-toolbar>

      <!-- ===== MENU(desktop-only) ===== -->
      <menu-desktop class="desktop-only"></menu-desktop>
    </q-layout-header>


    <!-- ========================== DRAEWER LEFT(mobile-only) ======================================== -->
    <q-layout-drawer class="mobile-only"
                     v-model="leftDrawerOpen"
                     :content-class="'bg-grey-2'"
    >
      <div id="dreawerLeft" view="hHh Lpr lFf">
        <q-layout container style="height: 100vh;">
          <q-layout-header class="no-shadow text-center q-py-md bg-white">
            <!-- === LOGO === -->
            <router-link :to="{ name: 'home'}">
              <img src="statics/logo.png" width="60%"></img>
            </router-link>
          </q-layout-header>

          <q-page-container>
            <!--= MENU MOBILE =-->
            <menu-mobile></menu-mobile>
          </q-page-container>

          <q-layout-footer id="footer" class="no-shadow bg-white">
            <!--= Information =-->
            <information-header></information-header>
          </q-layout-footer>
        </q-layout>
      </div>
    </q-layout-drawer>
  </div>
</template>


<script>
  import menuDesktop from '@imagina/qmenu/_components/menu-desktop'
  import menuMobile from '@imagina/qmenu/_components/menu-mobile'
  import informationHeader from 'src/components/master/header/information'
  import searchComponent from '@imagina/qmenu/_components/search'

  export default {
    props: {},
    components: {
      informationHeader,
      searchComponent,
      menuDesktop,
      menuMobile
    },
    watch: {},
    mounted() {
      this.$nextTick(function () {
      })
    },
    data() {
      return {
        leftDrawerOpen: false,
      }
    },
    methods: {
      toggleFullscreen() {
        this.$q.fullscreen.toggle()
      },
    }

  }
</script>

<style lang="stylus">
  @import "~variables";
  #header
    .btn-menu
      i
        font-size 30px

  #dreawerLeft
    .q-layout-header
      min-height auto
      height auto
</style>
