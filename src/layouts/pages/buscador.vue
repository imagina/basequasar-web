<template>
  <div id="pageBuscar" class="relative-position">
    <!--= BANNER =-->
    <banner-component :dataBanner="{title: 'buscador'}">
    </banner-component>

    <!-- Contend -->
    <div class="q-container relative-position">
      <!--Title-->
      <div class="titleCategory mx-auto position-relative">
        <h1 class="text-center q-display-1">
          BUSCAR
          <span class="text-secondary uppercase">
          "{{searchParameter}}"
        </span>
        </h1>
        <div class="bar position-absolute"></div>
      </div>


      <!--Result-->
      <div class="contentDescription gutter-md row q-py-lg"
           v-if="results && results.length">
        <div class="col-12 col-lg-4" :key="key"
             v-for="(item,key) in results">
          <q-card inline style="width: 100%">
            <q-card-media>
              <router-link :to="'/'+item.category.slug+'/'+item.slug">
                <div class="img" :style="'background-image: url('+item.mainimage+')'"></div>
              </router-link>
            </q-card-media>
            <q-card-title>
              <router-link :to="'/blog/'+item.slug">
                <h1 class="text-primary q-headline">
                  {{item.title}}
                </h1>
              </router-link>
            </q-card-title>
            <q-card-separator/>
            <q-card-actions>
              <div v-html="item.summary"></div>
            </q-card-actions>
          </q-card>
        </div>
      </div>

      <!--Not results-->
      <not-results v-if="!results.length"></not-results>

      <!--Inner Loading-->
      <q-inner-loading :visible="innerLoading">
        <q-spinner-ball size="50px" color="primary"></q-spinner-ball>
      </q-inner-loading>
    </div>
  </div>
</template>

<script>
  /*Component*/
  import bannerComponent from '@imagina/qblog/_components/widgets/widget-banner'
  import notResults from 'src/components/notResults'

  /*Services*/
  import searchServices from 'src/services/search'

  export default {
    meta () {
      return {
        title: 'Buscar: '+this.searchParameter+' | '+env('TITLE')
      }
    },
    components: {
      bannerComponent,
      notResults
    },
    watch: {
      $route() {
        this.searchData()
      }
    },
    data() {
      return {
        results: [],
        innerLoading: false,
        searchParameter : this.$route.query.search
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.searchData()
      })
    },
    methods: {
      searchData() {
        let searchData = this.$route.query.search
        this.searchParameter = searchData
        this.innerLoading = true
        searchServices.search(searchData).then(response => {
          let data = response.data
          if(data){
            let resultArray = []
            for(var item in data){
              resultArray = resultArray.concat(data[item])
            }
            this.results = resultArray
          }else{
            this.results = []
          }

          this.innerLoading = false
        })
      },
    },
  }
</script>

<style lang="stylus">
  @import "~variables";
  #pageBuscar
    .titleCategory
      width max-content
      margin 0 auto
      margin-top 25px
      h1
        margin 5px 0
      .bar
        height 4px
        width 50%
        margin 0 auto
        background-color $primary
        left 0
        right 0

    .q-card
      .q-card-media
        .img
          background-size cover
          background-position center
          background-repeat no-repeat
          height 277px
          width 100%
      .q-card-title
        position relative
        h1
          line-height 1
          height 50px
          overflow hidden
      .q-card-actions
        div
          line-height 1.4
          height 75px
          overflow hidden
          padding 8px 16px
</style>
