<template>
  <flmTable :config="tableConfig">
    <template #userType="scope">
      <el-tag :type="['', 'info'][scope.row.userType]">{{ ['管理员', '普通用户'][scope.row.userType] }}</el-tag>
    </template>
    <template #tableAciton="scope">
      <el-button type="text" @click="tableFunc(scope)">表格操作</el-button>
    </template>
  </flmTable>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { flmTable } from '@/../node_modules/flame-plus/packages/components'
import { TableConfig } from '@/../node_modules/flame-plus/packages/model/flmComponentConfig'

// 表格
const tableConfig: TableConfig = reactive({
  'data': [
    {
      name: '张三',
      userType: '0',
      address: '地址',
      province: '湖北省',
      city: '武汉市',
      area: '洪山区',
    },
    {
      name: '李四',
      userType: '1',
      address: '地址',
      province: '湖北省',
      city: '武汉市',
      area: '洪山区',
    },
    {
      name: '王五',
      userType: '1',
      address: '地址',
      province: '湖北省',
      city: '武汉市',
      area: '洪山区',
    },
    {
      name: '赵六',
      userType: '1',
      address: '地址',
      province: '湖北省',
      city: '武汉市',
      area: '洪山区',
    },
    {
      name: '张三',
      userType: '1',
      address: '地址',
      province: '湖北省',
      city: '武汉市',
      area: '洪山区',
    },
    {
      name: '张三',
      userType: '1',
      address: '地址',
      province: '湖北省',
      city: '武汉市',
      area: '洪山区',
    },
  ],
  'border': true,
  'height': "250",
  'columns': [
    { prop: 'name', label: '用户名', type: 'selection', fixed: 'left' },
    { prop: 'name', label: '序号', type: 'index', width: 60 },
    { prop: 'name', label: '用户名' },
    { prop: 'userType', label: '用户类型', isSlot: true },
    {
      prop: 'address',
      label: '地址',
      columns: [
        { prop: 'province', label: '省' },
        { prop: 'city', label: '市' },
        {
          prop: 'area',
          label: '区',
          columns: [
            { prop: 'address', label: '详细地址' },
            { prop: 'tableAciton', label: '操作栏', isSlot: true }
          ]
        },
      ]
    },
  ]
})
const tableFunc = (event: any) => {
  console.log('%c [ event ]-240', 'font-size:13px; background:pink; color:#bf2c9f;', event)
}
</script>