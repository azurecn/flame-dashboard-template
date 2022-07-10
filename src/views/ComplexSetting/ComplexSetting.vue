<template>
  <el-tabs class="complex-setting" v-model="activeName">
    <el-tab-pane label="form - 表单" name="flmForm">
      <flmFormModel />
    </el-tab-pane>
    <el-tab-pane label="table - 表格" name="flmTable">
      <flmTableModel />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
import flmFormModel from './components/flmFormModel.vue'
import flmTableModel from './components/flmTableModel.vue'

const activeName: Ref<string> = ref('flmForm')
</script>

<style lang="scss" scoped>
.complex-setting {
  height: calc(100% - 40px);
  padding: 20px;
  border-radius: 2px;
  background: #FFF;
}
</style>