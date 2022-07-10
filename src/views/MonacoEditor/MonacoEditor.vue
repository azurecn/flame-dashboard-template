<template>
  <monacoEditor
    ref="myEditor"
    language="javascript"
    :hints="[...pythonHints, ...customHints]"
    :dynamicHints="dynamicHints"
    @change="editorChange"
  />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { monacoEditor } from '@/components'
import { Hint } from './MonacoEditor'

const myEditor: any = ref(null)
// python关键字
const pythonHints: Array<string> = [
  'and', 'as', 'assert', 'break', 'class',
  'continue', 'def', 'del', 'elif', 'else',
  'except', 'False', 'finally', 'for', 'from',
  'global', 'if', 'import', 'in', 'is',
  'lambda', 'None', 'nonlocal', 'not', 'pass',
  'raise', 'return', 'True', 'or', 'try',
  'while', 'with', 'yield'
]
// 自定义关键字
const customHints: Array<Hint | string> = [{
  label: 'yeta-keyword',     // 提示名称（必填）
  kind: 'Keyword',           // 提示种类，显示不同图标 Keyword | Function
  insertText: 'yeta-test',   // 选择后粘贴的文字（必填）
  detail: '这是我的yeta提示',  // 详细描述
}]

const mockTips = [
  {
    keyword: 'yeta',
    detail: 'yeta提示',
    childTips: [
      {
        keyword: 'yetaClassOne',
        detail: 'yeta 类 1',
        childTips: [
          { keyword: 'yetaFucntionOne', detail: '类1 方法 1' },
          { keyword: 'yetaFucntionTwo', detail: '类1 方法 2' },
        ]
      },
      { keyword: 'yetaClassTwo', detail: 'yeta 类 2' },
      { keyword: 'yetaClassThree', detail: 'yeta 类 3' },
      { keyword: 'yetaClassFour', detail: 'yeta 类 4' }
    ]
  },
  {
    keyword: 'yeta',
    detail: 'yeta提示',
  }
]

const dynamicHints = () => {
  let recursion = () => {

  }
}

onMounted(() => {
  myEditor.value.initEditor()  // 初始化编辑器
  myEditor.value.addHint()     // 添加语法提示
})

// 编辑器修改
const editorChange = (event: string) => {
  console.log('编辑器内容：', event)
}
</script>