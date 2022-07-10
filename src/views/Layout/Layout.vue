<template>
  <div class="home">
    <layoutHeader />
    <layoutMenu />
    <layoutMain />
  </div>
</template>

<script lang="ts">
import layoutHeader from './components/layoutHeader.vue'
import layoutMenu from './components/layoutMenu.vue'
import layoutMain from './components/layoutMain.vue'

export default {
  name: 'Layout',
  components: {
    layoutHeader,
    layoutMenu,
    layoutMain
  },
}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 200px repeat(23, 1fr);
  grid-template-rows: 50px auto;
  height: 100%;
}
</style>
