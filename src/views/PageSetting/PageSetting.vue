<template>
  <flm-report-page>
    <!-- 搜索栏-角色类型 -->
    <template #search-roleType="{ prop, formModel }">
      <el-select :modelValue="formModel[prop]" multiple collapse-tags disabled>
        <el-option
          v-for="role in roleData"
          :key="role.id"
          :value="role.id"
          :label="role.role"
        ></el-option>
      </el-select>
      <el-button @click="openRoleDialog(prop, formModel)">选择</el-button>
      <el-dialog v-model="showRoleDialog" title="用户角色">
        <el-table :data="roleData" @selection-change="selectRole">
          <el-table-column type="selection" label="Date" />
          <el-table-column prop="role" label="角色名称" />
        </el-table>
        <template #footer>
          <el-button @click="closeRoleDialog">取消</el-button>
          <el-button type="primary" @click="confirmRole(prop, formModel)">确认</el-button>
        </template>
      </el-dialog>
    </template>
    <!-- 表格-用户类型 -->
    <template #table-userType="scope">
      <el-tag :type="scope.row.userType ? 'info' : ''">{{ ['管理员', '普通用户'][scope.row.userType] }}</el-tag>
    </template>
    <!-- 查看-用户类型 -->
    <template #read-userType="{ formModel, prop }">
      <el-tag :type="formModel[prop] ? 'info' : ''">{{ ['管理员', '普通用户'][formModel[prop]] }}</el-tag>  
    </template>
    <!-- 新增-提示 -->
    <template #add-addTips>
      <el-alert
        title="新增用户请按照表格提示进行填写（注：此处为插槽）"
        type="info"
        :closable="false"
      />
    </template>
  </flm-report-page>
</template>

<script lang="ts" setup>
import { ref, Ref, reactive } from 'vue'
import { flmReportPage } from '@/../node_modules/flame-plus/packages/components'
import { FormModel } from '@/../node_modules/flame-plus/packages/model/flmComponentConfig'

let roleSelection: Array<number> = reactive([])  // 勾选角色
// 角色数据
const roleData: Array<any> = reactive([
  { id: 1, role: '超级管理员' },
  { id: 2, role: '管理员' },
  { id: 3, role: '大区经理' },
  { id: 4, role: '店铺老板' },
  { id: 5, role: '普通用户' },
])
// 打开角色弹窗
let showRoleDialog: Ref<boolean> = ref(false)
const openRoleDialog = (prop: string, formModel: FormModel) => {
  roleSelection = formModel[prop]
  showRoleDialog.value = true
}
// 关闭角色弹窗
const closeRoleDialog = () => showRoleDialog.value = false
// 选择角色
const selectRole = (event: Array<any>) => roleSelection = event.map(({ id }) => id)
// 提交角色选择
const confirmRole = (prop: string, formModel: FormModel) => {
  formModel[prop] = roleSelection
  closeRoleDialog()
}
</script>

<style lang="scss" scoped>
.el-select {
  width: 150px;
}
</style>