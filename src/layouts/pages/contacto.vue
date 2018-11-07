<template>
  <div id="pageContacto" class="q-layout-page">
    <!-- Banner -->
    <banner-component :dataBanner="{title : 'contacto'}"></banner-component>

    <!-- Contend -->
    <div class="q-container">
      <div class="contentDescription row q-py-lg">
        <!--FORM-->
        <div class="col-12 col-lg-8">
          <div class="form q-pr-xl">
            <form-component></form-component>
          </div>
        </div>

        <!--DATA CONTACT-->
        <div class="description col-12 col-lg-4 q-mt-lg">
          <q-list>
            <!--Address-->
            <q-item>
              <q-item-side icon="fas fa-map-marker-alt" color="primary" />
              <q-item-main>
                <q-item-tile label>Calle 151 # 115-28 </q-item-tile>
                <q-item-tile sublabel>Bogotá - Colombia</q-item-tile>
              </q-item-main>
            </q-item>
            <!-- Number Phones -->
            <q-item-separator inset />
            <q-item>
              <q-item-side icon="fas fa-phone" color="primary" />
              <q-item-main>
                <q-item-tile label>
                  <a href="tel: 4885219" class="text-black">
                    4885219
                  </a>
                </q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="fas fa-mobile-alt" color="primary" />
              <q-item-main inset>
                <q-item-tile label>
                  <a href="tel: 3143395731" class="text-black">
                    314 339 5731
                  </a>
                </q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="fab fa-whatsapp" color="primary" />
              <q-item-main inset>
                <q-item-tile label>
                  <a href="https://api.whatsapp.com/send?phone=573174320413" target="_blank"
                     class="text-black desktop-only">
                    317 432 0413
                  </a>
                  <a href="whatsapp://send?abid=phonenumber&phone=+573174320413" class="text-black mobile-only">
                    317 432 0413
                  </a>
                </q-item-tile>
              </q-item-main>
            </q-item>
            <!--Email-->
            <q-item-separator inset />
            <q-item>
              <q-item-side icon="fas fa-envelope" color="primary" />
              <q-item-main>
                <q-item-tile label>
                  <a href="mailto:atcolombiahb@gmail.com" class="text-black">
                    atcolombiahb@gmail.com
                  </a>
                </q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /*Components*/
  import bannerComponent from '@imagina/qblog/_components/widgets/widget-banner'
  import formComponent from 'src/components/pages/contacto/form'

  export default {
    meta () {
      return {
        title: 'Contacto | '+env('TITLE')
      }
    },
    props: {},
    components: {
      bannerComponent,
      formComponent
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
  #pageContacto
    .form
      @media screen and (max-width : $breakpoint-md)
        padding 0
</style>
