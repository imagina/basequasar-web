<template>
  <div id="layout404" class="text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      ></img>
    </p>
    <p class="text-faded">Sorry, nothing here...<strong>(404)</strong></p>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push({name: 'home'})"
    >Go back</q-btn>
  </div>
</template>
<script>
  export default {
    name: 'Error404'
  }
</script>
<style lang="stylus">
  @import "~variables";
  #layout404
    padding 160px 0 100px 0
    @media screen and (max-width : $breakpoint-md)
      padding 100px 0 !important
</style>
