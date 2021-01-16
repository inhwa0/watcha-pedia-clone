<template src="./Test.html"/>

<script>
export default {
  name: "Test",
  data: () => ({
    item: {},
    langs: ['ko', 'en', 'sv']
  }),
  created() {
  },
  methods: {
    onClickTest() {
      console.log(' test page !! ')
    },
    onClickChangeLocal() {
      this.$i18n.locale = 'en'
    }
  }
}
</script>

<style lang="scss">
</style>