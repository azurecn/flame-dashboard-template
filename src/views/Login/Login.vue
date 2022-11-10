<template>
  <div class="login">
    <el-form
      class="login-form"
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      size="large"
    >
      <el-form-item>
        <div class="system-name">XX系统</div>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="loginForm.code" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item prop="mm">
        <el-input v-model="loginForm.mm" placeholder="请输入密码" show-mm />
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-button"
          type="primary"
          auto-insert-space
          @click="userLogin(loginFormRef)"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import store from '@/store'
import router from '@/router'
import type { FormInstance, FormRules } from 'element-plus'
import request from '@/plugins/request'

const loginFormRef = ref<FormInstance>()
const loginForm = reactive({
  code: 'web-project',
  mm: 'web-project'
})
const loginRules = reactive<FormRules>({
  code: { required: true, message: '请输入账号', trigger: 'blur' },
  mm: { required: true, message: '请输入密码', trigger: 'blur' },
})
const userLogin = (loginFormRef: FormInstance | undefined) => {
  if (!loginFormRef) return
  loginFormRef.validate((valid) => {
    if (valid) {
      request.flameRequest({
        service: '/web-project-service',
        projectName: 'web-project',
        tableName: 'flameuser',
        flameMethod: 'login',
        data: loginForm
      })
        .then(({ items }: any) => {
          request.setToken(items.token)
          console.log('%c [ token ]-60', 'font-size:13px; background:pink; color:#bf2c9f;', request)
          store.commit('setToken', items.token)
          router.push('/')
        })
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/login-bg1.png');
  background-repeat: no-repeat;
  background-position: 30% 50%;
  .login-form {
    width: 350px;
    margin-left: 100px;
    padding: 30px;
    border-radius: 4px;
    backdrop-filter: blur(10px);
    background-color:rgba(#FFF, .3);
    box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08);
    .system-name {
      width: 100%;
      font-size: 20px;
      text-align: center;
    }
    .login-button {
      width: 100%;
      margin-top: 33px;
    }
  }
}
</style>