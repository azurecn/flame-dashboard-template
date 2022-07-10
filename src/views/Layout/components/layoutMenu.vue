<template>
  <div class="layout-menu">
    <el-dropdown class="projcet" trigger="click" @command="methods.changeProject">
      <div class="project-name">
        {{ currentProject }}
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="projectName of projectList"
            :key="projectName"
            :command="projectName"
          >{{ projectName }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-menu default-active="/" router>
      <el-menu-item index="/">
        <span>菜单配置</span>
      </el-menu-item>
      <el-menu-item index="/baseSetting">
        <span>基础组件</span>
      </el-menu-item>
      <el-menu-item index="/complexSetting">
        <span>复合组件</span>
      </el-menu-item>
      <el-menu-item index="/pageSetting">
        <span>页面组件</span>
      </el-menu-item>
      <el-menu-item index="/codemeirror">
        <span>codemeirror</span>
      </el-menu-item>
      <el-menu-item index="/monacoEditor">
        <span>monacoEditor</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, Ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

const currentProject: Ref<string> = ref('项目1'),
  projectList: Array<string> = reactive(['项目1', '项目2', '项目3'])

const methods = reactive({
  changeProject(event: string) {
    currentProject.value = event
  }
})
</script>

<style lang="scss" scoped>
.layout-menu {
  grid-column: span 1;
  border-right: 1px solid #EBEEF5;
  .projcet {
    display: flex;
    justify-content: center;
    width: 100%;
    .projcet-list {
      width: 180px;
    }
  }
  .project-name {
    height: 40px;
    border-bottom: 1px solid #EBEEF5;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
  .el-menu {
    border: none;
  }
}
</style>