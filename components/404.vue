<template>
  <div id="notFoundComponent" class="text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">Sorry, nothing here...<strong>(404)</strong></p>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push({name: 'home'})"
    >Go to Home</q-btn>
  </div>
</template>

<script>
  export default {
    name: 'Error404'
  }
</script>

<style lang="stylus">
  @import "~variables";
  #notFoundComponent
    padding 160px 0 100px 0
</style>
