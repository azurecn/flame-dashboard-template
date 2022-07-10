<template>
  <div class="layout-header">
    <div class="platform">
      <img class="logo" src="@/assets/logo.png">
      <div class="platform-name">管理系统</div>
    </div>
    <div class="toolbar">
      <div class="tool">切换语言</div>
      <el-icon class="el-icon" :size="16"><caret-bottom /></el-icon>
      <el-divider direction="vertical"></el-divider>
      <el-popover placement="bottom-end" :width="500" trigger="click">
        <template #reference>
          <div class="tool">
            <el-badge :max="99" :value="200" class="item">
              <div class="notice">通知</div>
            </el-badge>
            <el-icon class="el-icon" :size="16"><caret-bottom /></el-icon>
          </div>
        </template>
        <el-table :data="noticeList" size="small" :show-header="false">
          <el-table-column prop="notice" label="消息" width="200" show-overflow-tooltip />
          <el-table-column prop="status" label="状态" width="60">
            <template #default="scope">
              <el-tag size="small" :type="noticeStatus(scope.row.status).type">{{ noticeStatus(scope.row.status).text }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="日期" width="140" />
          <el-table-column label="操作" width="50">
            <el-button type="text" size="small">查看</el-button>
          </el-table-column>
        </el-table>
      </el-popover>
      <el-divider direction="vertical"></el-divider>
      <el-popover placement="bottom-end" :width="200" trigger="click">
        <template #reference>
          <div class="tool">
            <el-avatar
              shape="circle"
              :size="25"
              fit="cover"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            ></el-avatar>
            <el-icon class="el-icon" :size="16"><caret-bottom /></el-icon>
          </div>
        </template>
        <div class="user-popover">
          <div class="tool-cell">
            <div class="tool-title">
              <div class="title-line"></div>用户信息
            </div>
            <div class="tool-main user-info">
              <div class="user">{{ userInfo.userName }} <el-tag size="small">{{ userInfo.userRole }}</el-tag></div>
              <div class="version">系统版本：{{ userInfo.systemVersion }}</div>
            </div>
          </div>
          <div class="tool-cell">
            <div class="tool-title">
              <div class="title-line"></div>可用操作
            </div>
            <div class="tool-main">
              <div
                class="operation"
                v-for="operation in userOperationList"
                :key="operation.operation"
              >
                {{ operation.text }}
                <el-icon :size="12"><arrow-right /></el-icon>
              </div>
            </div>
          </div>
          <div class="tool-cell">
            <div class="info-buttons">
              <el-button type="primary" size="small">注销</el-button>
            </div>
          </div>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { CaretBottom, ArrowRight } from '@element-plus/icons-vue'
import { Notice, NoticeStatus, UserInfo, UserOperation } from './layoutHeader'

// 通知
const noticeList: Array<Notice> = reactive([
  { notice: '您有一条紧急通知，请马上处理', date: '2021-12-12 08:32:21', status: 0 },
  { notice: '您有一条待办通知，请马上处理', date: '2021-12-12 08:32:21', status: 1 },
  { notice: '您有一条普通通知，请马上处理', date: '2021-12-12 08:32:21', status: 2 },
])
const noticeStatus = computed(() => (status: number) => {
  const statusList: Array<NoticeStatus> = [
    { text: '紧急', type: 'danger' },
    { text: '待办', type: 'warning' },
    { text: '普通', type: 'info' },
  ]
  return statusList[status]
})
// 用户信息
const userInfo: UserInfo = reactive({
  userName: '张三',
  userRole: '系统管理员',
  systemVersion: 'v1.0.0'
})
const userOperationList: Array<UserOperation> = reactive([
  { operation: 'userSetting', text: '个人中心' },
  { operation: 'userSetting', text: '账号设置' },
  { operation: 'userSetting', text: '问题反馈' },
  { operation: 'userSetting', text: '联系我们' },
])
</script>

<style lang="scss" scoped>
.layout-header {
  grid-column: span 24;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .platform {
    display: flex;
    align-items: center;
    .logo {
      width: 35px;
      height: 35px;
    }
    .platform-name {
      margin-left: 5px;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .toolbar {
    display: flex;
    align-items: center;
    .tool {
      display: flex;
      align-items: center;
      padding: 0 4px;
      cursor: pointer;
      .el-icon {
        margin-left: 5px;
      }
    }
  }
}
</style>

<style lang="scss">
$theme-color: #409EFF;
.user-popover {
  background: #FFF;
  .tool-cell {
    font-size: 14px;
    .tool-title {
      display: flex;
      align-items: center;
      font-size: 16px;
      .title-line {
        width: 4px;
        height: 20px;
        margin-right: 8px;
        border-radius: 4px;
        background: $theme-color;
      }
    }
    .tool-main {
      margin-bottom: 10px;
      padding: 8px 0;
      .el-tag {
        margin-left: 12px;
        border-radius: 20px;
        font-size: 10px;
      }
      .version {
        margin-top: 8px;
        color: #C0C4CC;
        font-size: 12px;
      }
    }
    .user-info {
      padding: 8px 16px;
    }
    .operation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px 16px;
      cursor: pointer;
      &:hover {
        color: $theme-color;
        background: rgba($theme-color, .1);
      }
    }
    .info-buttons {
      display: flex;
      justify-content: flex-end;
      margin-top: 16px;
    }
  }
}
</style>