<template>
  <div class="layout-main">
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'layoutMain'
}
</script>

<style lang="scss" scoped>
.layout-main {
  grid-column: span 23;
  padding: 15px;
  background: #EFEFEF;
  border-radius: 2px;
}
</style>