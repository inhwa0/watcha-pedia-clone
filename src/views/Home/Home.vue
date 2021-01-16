<template src="./Home.html"/>

<script>
import movies from "@/MackData/WatchHomeMoviesRankings";

export default {
  name: "Home",
  components: {},
  data: () => ({
    attrs: {
      class: 'mb-6',
      boilerplate: false,
      elevation: 2,
    },
    isSkeleton: true,
    getInfo: {}
  }),
  created() {
    setTimeout(() => {
      // this.isSkeleton = !this.isSkeleton
    }, 1000)

    this.getList()
  },
  methods: {
    onClickTest() {
      console.log(' Home page !! ')
    },
    async getList() {
      this.getInfo = {...movies}
    },
  }
}
</script>

<style lang="scss">
</style>