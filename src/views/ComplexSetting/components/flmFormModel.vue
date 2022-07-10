<template>
  <flmForm
    class="flm-form"
    :config="formConfig"
    @submit="formSubmit"
    @cancel="formCancel"
    @customEvent="formCustomEvent"
  >
    <template #formSlot="scope">
      <el-input v-model="scope.formModel[scope.prop]"></el-input>
    </template>
  </flmForm>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { flmForm } from '@/../node_modules/flame-plus/packages/components'
import { isValidKey } from '@/../node_modules/flame-plus/packages/utils'

import {
  ElementSize,
  ElementIcons,
  ButtonType,
  ControlTypes,
  DateType,
  FormConfig
} from '@/../node_modules/flame-plus/packages/model/flmComponentConfig'

onMounted(() => {
  // 模拟接口调用，表单回显
  // setTimeout(() => {
  //   formConfig.model = {
  //     'userName': '李四',
  //     'email': '123@qq.com',
  //     'password': '123456',
  //     'confirmPassword': '123456',
  //     'userType': 0,
  //     'isAdmin': false
  //   }
  // }, 1000)
})

// 表单
const formConfig: FormConfig = reactive({
  'model': {
    'orderName': '',
    'orderItemType': null,
    'area': 1,
    'deliveryPerson': '0',
    'deliveryDate': [new Date(), new Date()],
    'deliveryTime': [null, null],
    'needSkipVacation': false,
    'emergencyLevel': 1,
    'rewardAmount': 0,
    'aggreeUserAgreement': false
  },
  'rules': {
    'userName': [
      { 'required': true, 'message': '请填写用户名', 'trigger': 'blur' },
      { 'min': 2, 'max': 10, 'message': '用户名字符在 2 ~ 10 以内', 'trigger': 'blur' },
    ],
    'email': [{
      'required': true,
      'trigger': 'blur',
      'validator': (rule: any, value: any, callback: any) => {
        const emailRegExp: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!emailRegExp.test(value)) return callback(new Error('请填写正确的邮箱'))
        callback()
      }
    }],
    'password': [{
      'required': true,
      'trigger': 'blur',
      'validator': (rule: any, value: any, callback: any) => {
        const passwordRegExp: RegExp = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
        if (!passwordRegExp.test(value)) return callback(new Error('密码最少 6 位，大小写字母、数字、特殊字符至少各 1 个'))
        callback()
      }
    }],
    'confirmPassword': [{
      'required': true,
      'trigger': 'blur',
      'validator': (rule: any, value: any, callback: any) => {
        const passwordRegExp: RegExp = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
        if (!passwordRegExp.test(value)) return callback(new Error('密码最少 6 位，大小写字母、数字、特殊字符至少各 1 个'))
        callback()
      }
    }]
  },
  'label-position': 'right',
  'label-width': '120px',
  'label-suffix': '：',
  // 自定义属性
  'items': [
    {
      'prop': 'orderName',
      'label': '订单名称',
      'controlType': ControlTypes['flmInput'],
      'controlConfig': {
        'minlength': 4,
        'maxlength': 50,
        'placeholder': '长度在 4 ~ 50 之间',
        'clearable': true,
      }
    },
    {
      'prop': 'orderItemType',
      'label': '订单物件',
      'controlType': ControlTypes['flmCascader'],
      'controlConfig': {
        'options': [
          {
            value: '0',
            label: '普通货物',
          },
          {
            value: '1',
            label: '敏感货物',
            children: [
              {
                value: '11',
                label: '易碎品',
                children: [
                  {
                    value: '111',
                    label: '玻璃制品',
                  },
                ]
              },
              {
                value: '12',
                label: '贵重物品',
                children: [
                  {
                    value: '121',
                    label: '精密仪器',
                  },
                  {
                    value: '122',
                    label: '电子产品',
                  },
                  {
                    value: '123',
                    label: '重要文件',
                  },
                ]
              },
            ]
          },
          {
            value: '2',
            label: '其他',
            disabled: true
          }
        ],
        'placeholder': '请选择货物类型',
        'clearable': true,
      }
    },
    {
      'prop': 'area',
      'label': '所属分区',
      'controlType': ControlTypes['flmRadio'],
      'controlConfig': {
        'useButton': true,
        'radios': [
          { 'model-value': 1, label: '华北地区' },
          { 'model-value': 2, label: '华南地区' },
          { 'model-value': 'unknow', label: '未分拣', disabled: true },
        ]
      }
    },
    {
      'prop': 'deliveryPerson',
      'label': '派送人员',
      'controlType': ControlTypes['flmSelect'],
      'controlConfig': {
        'filterable': true,
        'hasGroup': true,
        'groups': [
          {
            'label': '自运营',
            'options': [
              { value: '0', label: '张三' },
              { value: '1', label: '李四' },
              { value: '2', label: '王五', disabled: true },
            ]
          },
          {
            'label': '第三方',
            'options': [
              { value: '3', label: '周六', disabled: true },
              { value: '4', label: '吴七' },
            ]
          },
        ],
      }
    },
    // {
    //   'prop': 'deliveryDate',
    //   'label': '派送日期',
    //   'controlType': ControlTypes['flmDatePicker'],
    //   'controlConfig': {
    //     'model-value': [new Date(), new Date()],
    //     'start-placeholder': '派送起始日期',
    //     'end-placeholder': '派送截止日期',
    //     'type': DateType['daterange'],
    //     'range-separator': '至',
    //     'disabled-date': (time: Date) => time.getTime() < Date.now()
    //   }
    // },
    // {
    //   'prop': 'deliveryTime',
    //   'label': '派送时间',
    //   'controlType': ControlTypes['flmTimePicker'],
    //   'controlConfig': {
    //     'start-placeholder': '派送开始时间',
    //     'end-placeholder': '派送结束时间',
    //     'is-range': true,
    //   }
    // },
    {
      'prop': 'needSkipVacation',
      'label': '跳过节假',
      'controlType': ControlTypes['flmSwitch'],
      'controlConfig': {}
    },
    {
      'prop': 'emergencyLevel',
      'label': '紧急程度',
      'controlType': ControlTypes['flmRate'],
      'controlConfig': {
        'max': 3,
        'low-threshold': 1,
        'high-threshold': 2,
        'colors': ['#67C23A', '#E6A23C', '#F56C6C'],
        'icons': [ElementIcons['BellFilled'], ElementIcons['BellFilled'], ElementIcons['BellFilled']],
        'void-icon': ElementIcons['Bell'],
        'show-text': true,
        'texts': ['普通', '限时', '紧急'],
      }
    },
    {
      'prop': 'rewardAmount',
      'label': '奖励金额',
      'controlType': ControlTypes['flmInputNumber'],
      'controlConfig': {
        'min': 0,
        'max': 20,
        'step': 5,
        'step-strictly': true,
      }
    },
    {
      'prop': 'aggreeUserAgreement',
      'label': '用户协议',
      'controlType': ControlTypes['flmCheckbox'],
      'controlConfig': {
        'label': '确认订单协议',
      }
    },
  ],
  'buttons': [
    {
      'text': '取消',
      'event': 'cancel'
    },
    {
      'type': ButtonType['primary'],
      'text': '提交',
      'event': 'submit'
    }
  ]
})
const formSubmit = (formModel: FormConfig['model']) => console.log('表单提交', formModel)
const formCancel = (formModel: FormConfig['model']) => console.log('表单取消', formModel)
const formCustomEvent = ({ event, formModel }: { event: string, formModel: FormConfig['model']}) => {
  const customEvent: Record<string, Function> = { forgotPassword }
  if (isValidKey(event, customEvent)) {
    customEvent[event](formModel)
  } else {
    ElMessage.error(`未声明自定义方法：${event}`)
  }
}
const forgotPassword = (formModel: FormConfig['model']) => console.log('忘记密码（自定义方法）', formModel)
</script>

<style lang="scss" scoped>
.flm-form {
  width: 500px;
}
</style>