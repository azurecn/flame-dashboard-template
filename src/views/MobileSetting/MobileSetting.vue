<template>
  <div class="request-page">
    <el-button @click="flameAxiosTest">flame-axios</el-button>
    <el-button @click="flameRequestTest">flame-request</el-button>
    <el-button @click="flameApiTest">flame-api</el-button>
  </div>
</template>

<script lang="ts" setup>
import store from '@/store'
import request from '@/plugins/request'

const flameAxiosTest = () => {
  request.flameAxios({
    method: 'post',
    url: `/openapi-service/rest?method=project.erpflametableinfo.allSearch&token=${store.state.token}`,
    data: { ref_level: 0, order_by: "flame_id" },
  })
}
const flameRequestTest = () => {
  request.flameRequest({
    tableName: 'erpflametableinfo',
    flameMethod: 'allSearch',
    data: { ref_level: 0, order_by: "flame_id" }
  })
}
const flameApiTest = () => {
  request.flameApi.allSearch({
    tableName: 'erpflametableinfo',
    data: { ref_level: 0, order_by: "flame_id" }
  })
}

</script>

<style lang="scss" scoped>
</style>