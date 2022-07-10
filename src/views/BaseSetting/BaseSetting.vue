<template>
  <div class="base-setting">
    <el-collapse v-model="activeComponent" accordion>
      <el-collapse-item title="button - 按钮" name="button">
        <flmButton :config="componentConfig.button.buttonConfig" @buttonClick="componentConfig.button.buttonClick" />
      </el-collapse-item>
      <el-collapse-item title="cascader - 级联选择器" name="cascader">
        <flmCascader
          :config="componentConfig.cascader.cascaderConfig"
          @change="componentConfig.cascader.cascaderChange"
          @expand-change="componentConfig.cascader.cascaderExpandChange"
          @blur="componentConfig.cascader.cascaderBlur"
          @focus="componentConfig.cascader.cascaderFocus"
          @visible-change="componentConfig.cascader.cascaderVisibleChange"
          @remove-tag="componentConfig.cascader.cascaderRemoveTag"
        />
      </el-collapse-item>
      <el-collapse-item title="checkbox - 多选框" name="checkbox">
        <flmCheckbox :config="componentConfig.checkbox.checkboxConfig" @change="componentConfig.checkbox.checkboxChange" />
      </el-collapse-item>
      <el-collapse-item title="checkboxGroup - 多选框组" name="checkboxGroup">
        <flmCheckboxGroup :config="componentConfig.checkboxGroup.checkboxGroupConfig" @change="componentConfig.checkboxGroup.checkboxGroupChange" />
      </el-collapse-item>
      <el-collapse-item title="colorPicker - 取色器" name="colorPicker">
        <flmColorPicker :config="componentConfig.colorPicker.colorPickerConfig" @change="componentConfig.colorPicker.colorPickerChange" />
      </el-collapse-item>
      <el-collapse-item title="datePicker - 日期选择器" name="datePicker">
        <flmDatePicker
          :config="componentConfig.datePicker.datePickerConfig"
          @change="componentConfig.datePicker.datePickerChange"
          @blur="componentConfig.datePicker.datePickerBlur"
          @focus="componentConfig.datePicker.datePickerFocus"
          @calendar-change="componentConfig.datePicker.datePickerCalendarChange"
          @panel-change="componentConfig.datePicker.datePickerPanelChange"
          @visible-change="componentConfig.datePicker.datePickerVisibleChange"
        />
      </el-collapse-item>
      <el-collapse-item title="input - 输入框" name="input">
        <flmInput
          :config="componentConfig.input.inputConfig"
          @blur="componentConfig.input.inputBlue"
          @focus="componentConfig.input.inputFocus"
          @change="componentConfig.input.inputChange"
          @input="componentConfig.input.inputInput"
          @clear="componentConfig.input.inputClear"
        />
      </el-collapse-item>
      <el-collapse-item title="inputNumber - 数字输入框" name="inputNumber">
        <flmInputNumber
          :config="componentConfig.inputNumber.inputNumberConfig"
          @change="componentConfig.inputNumber.inputNumberChange"
          @blur="componentConfig.inputNumber.inputNumberBlue"
          @focus="componentConfig.inputNumber.inputNumberFocus"
        />
      </el-collapse-item>
      <el-collapse-item title="pagination - 分页器" name="pagination">
        <flmPagination
          :config="componentConfig.pagination.paginationConfig"
          @size-change="componentConfig.pagination.paginationSizeChange"
          @current-change="componentConfig.pagination.paginationCurrentChange"
          @prev-click="componentConfig.pagination.paginationPrevClick"
          @next-click="componentConfig.pagination.paginationNextClick"
        />
      </el-collapse-item>
      <el-collapse-item title="radio - 单选框" name="radio">
        <flmRadio
          :config="componentConfig.radio.radioConfig"
          @change="componentConfig.radio.radioChange"
        />
      </el-collapse-item>
      <el-collapse-item title="rate - 评分" name="rate">
        <flmRate
          :config="componentConfig.rate.rateConfig"
          @change="componentConfig.rate.rateChange"
        />
      </el-collapse-item>
      <el-collapse-item title="read - 查看" name="read">
        <flmRead :config="componentConfig.read.readConfig" />
      </el-collapse-item>
      <el-collapse-item title="select - 选择器" name="select">
        <flmSelect
          :config="componentConfig.select.selectConfig"
          @change="componentConfig.select.selectChange"
          @visible-change="componentConfig.select.selectVisibleChange"
          @remove-tag="componentConfig.select.selectRemoveTag"
          @clear="componentConfig.select.selcetClear"
          @blur="componentConfig.select.selcetBlur"
          @focus="componentConfig.select.selcetFocus"
        />
      </el-collapse-item>
      <el-collapse-item title="slider - 滑块" name="slider">
        <flmSlider
          :config="componentConfig.slider.sliderConfig"
          @change="componentConfig.slider.sliderChange"
          @input="componentConfig.slider.sliderInput"
        />
      </el-collapse-item>
      <el-collapse-item title="switch - 开关" name="switch">
        <flmSwitch :config="componentConfig.switch.switchConfig" @change="componentConfig.switch.switchChange" />
      </el-collapse-item>
      <el-collapse-item title="timePicker - 时间选择器" name="timePicker">
        <flmTimePicker
          :config="componentConfig.timePicker.timePickerConfig"
          @change="componentConfig.timePicker.timePickerChange"
          @blur="componentConfig.timePicker.timePickerBlur"
          @focus="componentConfig.timePicker.timePickerFocus"
        />
      </el-collapse-item>
      <el-collapse-item title="timeSelect - 时间选择" name="timeSelect">
        <flmTimeSelect
          :config="componentConfig.timeSelect.timeSelectConfig"
          @change="componentConfig.timeSelect.timeSelectChange"
          @blur="componentConfig.timeSelect.timeSelectBlur"
          @focus="componentConfig.timeSelect.timeSelectFocus"
        />
      </el-collapse-item>
      <el-collapse-item title="transfer - 穿梭框" name="transfer">
        <flmTransfer
          :config="componentConfig.transfer.transferConfig"
          @change="componentConfig.transfer.transferChange"
          @left-check-change="componentConfig.transfer.transferLeftCheckChange"
          @right-check-change="componentConfig.transfer.transferRightCheckChange"
        >
          <template #default="{ option }">{{ option.label }}</template>
          <template #left-footer>
            <div class="transfer-footer">系统默认的所有权限</div>
          </template>
          <template #right-footer>
            <div class="transfer-footer">用户可以使用的权限</div>
          </template>
        </flmTransfer>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, reactive } from 'vue'
import {
  flmButton,
  flmCascader,
  flmCheckbox,
  flmCheckboxGroup,
  flmColorPicker,
  flmDatePicker,
  flmInput,
  flmInputNumber,
  flmPagination,
  flmRadio,
  flmRate,
  flmRead,
  flmSelect,
  flmSlider,
  flmSwitch,
  flmTimePicker,
  flmTimeSelect,
  flmTransfer,
} from '@/../node_modules/flame-plus/packages/components'
import {
  ElementSize,
  ElementIcons,
  ButtonType,
  ButtonConfig,
  CascaderPropsExpandTrigger,
  CascaderConfig,
  CheckboxConfig,
  CheckboxGroupConfig,
  DateType,
  DatePickerConfig,
  ColorPickerConfig,
  InputConfig,
  InputNumberConfig,
  PaginationConfig,
  RadioGroupConfig,
  RateConfig,
  ReadConfig,
  SelectConfig,
  SliderConfig,
  SwitchConfig,
  TimePickerAlign,
  TimePickerConfig,
  TimeSelectConfig,
  TransferConfig,
} from '@/../node_modules/flame-plus/packages/model/flmComponentConfig'

const activeComponent: Ref<string> = ref('button')  // 当前展示组件
const componentConfig: ComponentConfig = reactive({
  // 按钮
  button: {
    buttonConfig: {
      'type':	ButtonType['primary'],
      'plain': true,
      'text': '点击'
    },
    buttonClick: () => console.log('按钮点击事件')
  },
  // 级联选择器
  cascader: {
    cascaderConfig: {
      options: [
        {
          value: '0',
          label: '超级管理员',
        },
        {
          value: '1',
          label: '系统管理员',
          children: [
            {
              value: '11',
              label: '区域经理',
              children: [
                {
                  value: '111',
                  label: '武昌区经理',
                },
                {
                  value: '112',
                  label: '洪山区经理',
                },
              ]
            },
            {
              value: '12',
              label: '供应商',
            },
          ]
        },
        {
          value: '2',
          label: '其他',
          disabled: true
        }
      ],
      placeholder: '请选择用户角色',
      clearable: true,
      'show-all-levels': false,
      'collapse-tags': true,
      'collapse-tags-tooltip': true,
      filterable: true,
      props: {
        expandTrigger: CascaderPropsExpandTrigger['hover'],
        multiple: true
      }
    },
    cascaderChange: (value: CascaderConfig['model-value']) => {
      console.log(`级联选择器变化，值：`, value)
      componentConfig.cascader.cascaderConfig['model-value'] = value
    },
    cascaderExpandChange: (event: any) => console.log('级联选择器节点展开', event),
    cascaderBlur: (event: any) => console.log('级联选择器失焦', event),
    cascaderFocus: (event: any) => console.log('级联选择器聚焦', event),
    cascaderVisibleChange: (event: boolean) => console.log(`级联选择器下拉${event ? '显示' : '隐藏'}`),
    cascaderRemoveTag: (event: any) => console.log('级联选择器删除标签', event)
  },
  // 多选框
  checkbox: {
    checkboxConfig: {
      'model-value': true,
      'label': '复选框',
      'border': true,
    },
    checkboxChange: (value: CheckboxConfig['model-value']) => {
      console.log(`多选框变化，值：`, value)
      componentConfig.checkbox.checkboxConfig['model-value'] = value
    }
  },
  // 多选框组
  checkboxGroup: {
    checkboxGroupConfig: {
      'model-value': ['查询'],
      'items': [
        { label: '新增' },
        { label: '删除' },
        { label: '编辑' },
        { label: '查询' },
      ],
      'hasCheckAll': true,
    },
    checkboxGroupChange: (value: CheckboxGroupConfig['model-value']) => {
      console.log(`多选框组变化，值：`, value)
      componentConfig.checkboxGroup.checkboxGroupConfig['model-value'] = value
    },
  },
  // 取色器
  colorPicker: {
    colorPickerConfig: {
      'show-alpha': true,
      'predefine': ['#67C23A', '#E6A23C', '#F56C6C', '#909399']
    },
    colorPickerChange: (value: ColorPickerConfig['model-value']) => {
      console.log(`取色器变化，值：`, value)
      componentConfig.colorPicker.colorPickerConfig['model-value'] = value
    }
  },
  // 日期选择器
  datePicker: {
    datePickerConfig: {
      'model-value': [new Date(), new Date()],
      'start-placeholder': '订单开始时间',
      'end-placeholder': '订单结束时间',
      type: DateType['daterange'],
      'range-separator': '至',
      'disabled-date': (time: Date) => time.getTime() > Date.now()
    },
    datePickerChange: (value: DatePickerConfig['model-value']) => {
      console.log(`日期选择器变化，值：`, value)
      componentConfig.datePicker.datePickerConfig['model-value'] = value
    },
    datePickerBlur: (event: any) => console.log(`日期选择器失焦，值：`, event),
    datePickerFocus: (event: any) => console.log(`日期选择器聚焦，值：`, event),
    datePickerCalendarChange: (event: Array<Date>) => console.log('日期选择器日历变化', event),
    datePickerPanelChange: (event: any) => console.log('日期选择器日期面板变化', event),
    datePickerVisibleChange: (event: boolean) => console.log(`日期选择器下拉${event ? '显示' : '隐藏'}`),
  },
  // 输入框
  input: {
    inputConfig: {
      'placeholder': '请输入手机号码',
      'maxlength': 11,
      'clearable': true,
      'prefix-icon': "Cellphone",
    },
    inputBlue: () => console.log('输入框失焦'),
    inputFocus: () => console.log('输入框聚焦'),
    inputChange: (value: string | number) => console.log('输入框失焦或按下回车', value),
    inputInput: (value: string | number) => {
      console.log('输入框值修改', value)
      componentConfig.input.inputConfig.modelValue = value
    },
    inputClear: () => console.log('输入框清空'),
  },
  // 数字输入框
  inputNumber: {
    inputNumberConfig: {
      'model-value': 18,
      'min': 0,
      'max': 100,
      'step': 10,
      'controls-position': 'right',
      'placeholder': '请输入用户年龄'
    },
    inputNumberChange: (value: number) => {
      console.log('数字输入框变化，值：', value)
      componentConfig.inputNumber.inputNumberConfig['model-value'] = value
    },
    inputNumberBlue: () => console.log('数字输入框失焦'),
    inputNumberFocus: () => console.log('数字输入框聚焦'),
  },
  // 分页器
  pagination: {
    paginationConfig: {
      'page-size': 100,
      'current-page': 1,
      'page-sizes': [100, 200, 300, 400],
      'total': 400,
      'layout': 'sizes, prev, pager, next, jumper, ->, total',
    },
    paginationSizeChange: (pageSize: number) => console.log(`每页 ${pageSize} 条`),
    paginationCurrentChange: (current: number) => console.log(`当前为第 ${current} 页`),
    paginationPrevClick: (current: number) => console.log(`点击上一页，当前为第 ${current} 页`),
    paginationNextClick: (current: number) => console.log(`点击下一页，当前为第 ${current} 页`),
  },
  // 单选框
  radio: {
    radioConfig: {
      useButton: true,
      radios: [
        { 'model-value': 1, label: '经常' },
        { 'model-value': 2, label: '偶尔' },
        { 'model-value': 3, label: '从不' },
        { 'model-value': 'unknow', label: '未知', disabled: true },
      ]
    },
    radioChange: (value: RadioGroupConfig['model-value']) => {
      console.log('单选框变化，值：', value)
      componentConfig.radio.radioConfig['model-value'] = value
    },
  },
  // 评分
  rate: {
    rateConfig: {
      'model-value': 5,
      'max': 10,
      'low-threshold': 5,
      'high-threshold': 8,
      'colors': ['#F56C6C', '#E6A23C', '#67C23A'],
      'icons': [ElementIcons['CircleClose'], ElementIcons['Remove'], ElementIcons['CircleCheck']],
      'show-text': true,
      'texts': ['差', '差', '差', '差', '差', '中', '中', '良', '良', '优'],
    },
    rateChange: (value: RateConfig['model-value']) => {
      console.log('评分变化，值：', value)
      componentConfig.rate.rateConfig['model-value'] = value
    }
  },
  // 查看
  read: {
    readConfig: {
      'model-value': '  这是一个查看文本组件的单元测试，它包含三个属性 model-value 文本内容、class 文本类名、style 文本样式。这里将对文本内容进行控制，超出内容将进行隐藏。后面都是隐藏文字后面都是隐藏文字后面都是隐藏文字后面都是隐藏文字后面都是隐藏文字后面都是隐藏文字后面都是隐藏文字后面都是隐藏文字后面都是隐藏文字',
      'class': 'read-class',
      'style': 'color: #666;',
    }
  },
  // 选择器
  select: {
    selectConfig: {
      'multiple': true,
      'clearable': true,
      'collapse-tags': true,
      'collapse-tags-tooltip': true,
      'filterable': true,
      'allow-create': true,
      'hasGroup': true,
      'groups': [
        {
          'label': '中餐',
          'options': [
            { value: '0', label: '包子' },
            { value: '1', label: '油条' },
            { value: '2', label: '豆浆', disabled: true },
          ]
        },
        {
          'label': '西餐',
          'disabled': true,
          'options': [
            { value: '3', label: '牛排', disabled: true },
            { value: '4', label: '沙拉' },
          ]
        },
      ],
    },
    selectChange: ((value: SelectConfig['model-value']) => {
      console.log('选择器值修改', value)
      componentConfig.select.selectConfig['model-value'] = value
    }),
    selectVisibleChange: ((showOption: boolean) => console.log(`选择器下拉框${showOption ? '显示' : '隐藏'}`)),
    selectRemoveTag: ((tagValue: SelectConfig['model-value']) => console.log('选择器删除标签', tagValue)),
    selcetClear: (() => console.log('选择器值清除')),
    selcetBlur: (() => console.log('选择器值失焦')),
    selcetFocus: (() => console.log('选择器值聚焦')),
  },
  // 滑块
  slider: {
    sliderConfig: {
      'model-value': 50,
      step: 5,
      'show-input': true,
      'input-size': ElementSize['small'],
      'show-stops': true,
      'label': '音量'
    },
    sliderChange: ((value: SliderConfig['model-value']) => {
      console.log('滑块值变化，值', value)
      componentConfig.slider.sliderConfig['model-value'] = value
    }),
    sliderInput: ((value: SliderConfig['model-value']) => {
      console.log('滑块数据变化，值', value)
      componentConfig.slider.sliderConfig['model-value'] = value
    }),
  },
  // 开关
  switch: {
    switchConfig: {
      'active-color': "#13ce66",
      'inactive-color': "#ff4949",
      'active-text': "绿灯行",
      'inactive-text': "红灯停",
    },
    switchChange: (value: boolean | string | number) => {
      console.log('开关值修改', value)
      componentConfig.switch.switchConfig['model-value'] = value
    }
  },
  // 时间选择器
  timePicker: {
    timePickerConfig: {
      format: 'HH时 mm分 ss秒',
      'start-placeholder': '任务开始时间',
      'end-placeholder': '任务结束时间',
      'is-range': true,
      align: TimePickerAlign['center']
    },
    timePickerChange: (value: TimePickerConfig['model-value']) => {
      console.log(`时间选择器变化，值：`, value)
      componentConfig.timePicker.timePickerConfig['model-value'] = value
    },
    timePickerBlur: (event: any) => console.log(`时间选择器失焦，值：`, event),
    timePickerFocus: (event: any) => console.log(`时间选择器聚焦，值：`, event),
    timePickerVisibleChange: (event: boolean) => console.log(`时间选择器下拉${event ? '显示' : '隐藏'}`),
  },
  // 时间选择
  timeSelect: {
    timeSelectConfig: {
      placeholder: '订单开始时间',
      start: '06:00',
      end: '20:00',
      'min-time': '09:00',
      'max-time': '18:00',
    },
    timeSelectChange: (value: TimeSelectConfig['model-value']) => {
      console.log('时间选择变化，值：', value)
      componentConfig.timeSelect.timeSelectConfig['model-value'] = value
    },
    timeSelectBlur: () => console.log('时间选择失焦'),
    timeSelectFocus: () => console.log('时间选择聚焦'),
  },
  // 穿梭框
  transfer: {
    transferConfig: {
      'model-value': [],
      data: [
        { key: 'menu', label: '菜单配置' },
        { key: 'base', label: '基础组件' },
        { key: 'complex', label: '复合组件' },
        { key: 'page', label: '页面组件' },
        { key: 'code-meirror', label: 'code meirror', disabled: true },
        { key: 'monaco-editor', label: 'monaco editor', disabled: true },
      ],
      filterable: true,
      'filter-placeholder': '菜单关键词',
      'titles': ['所有权限', '账号权限']
    },
    transferChange: (value: TransferConfig['model-value']) => {
      console.log('穿梭框变化，值：', value)
      componentConfig.transfer.transferConfig['model-value'] = value
    },
    transferLeftCheckChange: (value: TransferConfig['model-value']) => console.log('穿梭框左侧勾选，值：', value),
    transferRightCheckChange: (value: TransferConfig['model-value']) => console.log('穿梭框右侧勾选，值：', value)
  },
})

interface ComponentConfig {
  button: { buttonConfig: ButtonConfig, buttonClick: () => void },
  cascader: {
    cascaderConfig: CascaderConfig,
    cascaderChange: (value: CascaderConfig['model-value']) => void,
    cascaderExpandChange: (event: any) => void,
    cascaderBlur: (event: any) => void,
    cascaderFocus: (event: any) => void,
    cascaderVisibleChange: (event: boolean) => void,
    cascaderRemoveTag: (event: any) => void
  },
  checkbox: { checkboxConfig: CheckboxConfig, checkboxChange: (value: CheckboxConfig['model-value']) => void },
  checkboxGroup: { checkboxGroupConfig: CheckboxGroupConfig, checkboxGroupChange: (value: CheckboxGroupConfig['model-value']) => void },
  colorPicker: { colorPickerConfig: ColorPickerConfig, colorPickerChange: (value: ColorPickerConfig['model-value']) => void },
  datePicker: {
    datePickerConfig: DatePickerConfig,
    datePickerChange: (value: DatePickerConfig['model-value']) => void,
    datePickerBlur: (event: any) => void,
    datePickerFocus: (event: any) => void,
    datePickerCalendarChange: (event: Array<Date>) => void,
    datePickerPanelChange: (date: any, mode: any, view: any) => void,
    datePickerVisibleChange: (event: boolean) => void,
  },
  input: {
    inputConfig: InputConfig,
    inputBlue: () => void,
    inputFocus: () => void,
    inputChange: (value: string | number) => void,
    inputInput: (value: string | number) => void,
    inputClear: () => void,
  },
  inputNumber: {
    inputNumberConfig: InputNumberConfig,
    inputNumberChange: (value: number) => void,
    inputNumberBlue: () => void,
    inputNumberFocus: () => void,
  },
  pagination: {
    paginationConfig: PaginationConfig,
    paginationSizeChange: (pageSize: number) => void,
    paginationCurrentChange: (current: number) => void,
    paginationPrevClick: (current: number) => void,
    paginationNextClick: (current: number) => void,
  },
  radio: {
    radioConfig: RadioGroupConfig,
    radioChange: (value: RadioGroupConfig['model-value']) => void,
  },
  rate: {
    rateConfig: RateConfig,
    rateChange: (value: RateConfig['model-value']) => void
  },
  read: { readConfig: ReadConfig },
  select: {
    selectConfig: SelectConfig,
    selectChange: (value: SelectConfig['model-value']) => void,
    selectVisibleChange: (showOption: boolean) => void,
    selectRemoveTag: (tagValue: SelectConfig['model-value']) => void,
    selcetClear: () => void,
    selcetBlur: () => void,
    selcetFocus: () => void,
  },
  slider: {
    sliderConfig: SliderConfig,
    sliderChange: (value: SliderConfig['model-value']) => void,
    sliderInput: (value: SliderConfig['model-value']) => void,
  },
  switch: { switchConfig: SwitchConfig, switchChange: (value: boolean | string | number) => void },
  timePicker: {
    timePickerConfig: TimePickerConfig,
    timePickerChange: (value: TimePickerConfig['model-value']) => void,
    timePickerBlur: (event: any) => void,
    timePickerFocus: (event: any) => void,
    timePickerVisibleChange: (event: boolean) => void,
  },
  timeSelect: {
    timeSelectConfig: TimeSelectConfig,
    timeSelectChange: (value: TimeSelectConfig['model-value']) => void,
    timeSelectBlur: () => void,
    timeSelectFocus: () => void,
  },
  transfer: {
    transferConfig: TransferConfig,
    transferChange: (value: TransferConfig['model-value']) => void,
    transferLeftCheckChange: (value: TransferConfig['model-value']) => void,
    transferRightCheckChange: (value: TransferConfig['model-value']) => void
  },
}
</script>

<style lang="scss" scoped>
.base-setting {
  padding: 20px;
  border-radius: 2px;
  background: #FFF;
  .read-class {
    width: 300px;
    overflow: hidden;        // 超出的文本隐藏
    text-overflow: ellipsis; // 溢出用省略号显示
    display: -webkit-box;
    -webkit-line-clamp: 5;   // 超出多少行
    -webkit-box-orient: vertical;
    text-indent: 2em;
  }
  .transfer-footer {
    font-size: 12px;
    color: #909399;
    text-align: center;
    line-height: 42px;
  }
}
</style>