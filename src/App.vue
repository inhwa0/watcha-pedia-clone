<template>
  <div id="app">

    <v-app>
      <Header/>
      <router-view/>
    </v-app>

  </div>
</template>

<script>


import Header from "@/components/Header/Header";

export default {
  name: 'App',
  components: {
    Header
  },
}
</script>

<style lang="scss">
</style>
