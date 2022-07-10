<template>
  <div :id="props.editorId" :style="{ width: props.width, height: props.height }"></div>
</template>

<script lang="ts" setup>
import { setLocaleData } from 'monaco-editor-nls'
import zh_CN from 'monaco-editor-nls/locale/zh-hans.json'
import { defineProps, defineEmits, ref, Ref, toRaw } from 'vue'

setLocaleData(zh_CN)                                                 // 先汉化语言，再加载monaco才能汉化成功
const monaco = require("monaco-editor/esm/vs/editor/editor.api")     // require方式引入monaco-editor
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'  // import方式无法汉化

const emit = defineEmits(['change'])
const props = defineProps({
  // 宽度
  width: {
    type: String,
    default: '100%',
  },
  // 高度
  height: {
    type: String,
    default: '500px',
  },
  // 编辑器id
  editorId: {
    type: String,
    default() {
      // 生成唯一id
      function guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          let r = Math.random() * 16 | 0,
            v = c == 'x'
              ? r
              : (r&0x3|0x8)
          return v.toString(16)
        })
      }
      return guid()
    }
  },
  // 编辑器配置，参考（https://www.cnblogs.com/wangjiahui/p/15593048.html）
  editorConfig: {
    type: Object,
    default() {
      return {
        automaticLayout: true,               // 自动布局
        foldingStrategy: 'indentation',      // 代码可分小段折叠
        autoClosingBrackets: 'always',       // 是否自动添加结束括号(包括中括号) "always" | "languageDefined" | "beforeWhitespace" | "never"
        autoClosingDelete: 'always',         // 是否自动删除结束括号(包括中括号) "always" | "never" | "auto"
        autoClosingQuotes: 'always',         // 是否自动添加结束的单引号 双引号 "always" | "languageDefined" | "beforeWhitespace" | "never"
        autoIndent: 'None',                  // 控制编辑器在用户键入、粘贴、移动或缩进行时是否应自动调整缩进
        comments: {                          // 注释配置
          ignoreEmptyLines: true,            // 插入行注释时忽略空行。默认为真。
          insertSpace: true                  // 在行注释标记之后和块注释标记内插入一个空格。默认为真。
        },
        cursorBlinking: 'Solid',             // 光标动画样式
        cursorSmoothCaretAnimation: true,    // 是否启用光标平滑插入动画  当你在快速输入文字的时候 光标是直接平滑的移动还是直接"闪现"到当前文字所处位置
        cursorSurroundingLines: 0,           // 光标环绕行数 当文字输入超过屏幕时 可以看见右侧滚动条中光标所处位置是在滚动条中间还是顶部还是底部 即光标环绕行数 环绕行数越大 光标在滚动条中位置越居中
        cursorSurroundingLinesStyle: 'all',  // "default" | "all" 光标环绕样式
        cursorWidth: 2,                      // <=25 光标宽度
        minimap: {                           // 关闭代码缩略图
          enabled: false                     // 是否启用预览图
        },
        overviewRulerBorder: false,          // 是否应围绕概览标尺绘制边框
        folding: true,                       // 是否启用代码折叠
        scrollBeyondLastLine: false,         // 设置编辑器是否可以滚动到最后一行之后
        renderLineHighlight: 'all',          // 当前行突出显示方式  "all" | "line" | "none" | "gutter"
        theme: 'vs-dark'                     // 官方自带三种主题vs, hc-black, or vs-dark
      }
    }
  },
  // 编辑器内容
  value: {
    type: String,
    default: 'Hello, World!'
  },
  // 编辑器语言
  language: {
    type: String,
    default: 'python',
    validator(value: string) {
      return ['python', 'javascript'].includes(value)
    }
  },
  // 编辑器提示
  hints: {
    type: Array,
    default: [],
    validator(value: Array<any>) {
      // 提示字符串校验
      // 对象类型必须包含lable和insertText；字符串类型无限制；其余类型不允许
      return !value.filter((item: any) => {
        let isHint = Object.prototype.toString.call(item) === '[object Object]' && ('label' in item) && ('insertText' in item)
        let isString = typeof(item) === 'string'
        return !isHint && !isString
      }).length
    }
  }
})

let editor: Ref<any> = ref(null)  // 文本编辑器

// 初始化编辑器
const initEditor = () => {
  // 初始化编辑器，确保dom已经渲染
  editor.value = monaco.editor.create(document.getElementById(props.editorId), {
    ...props.editorConfig,
    value: props.value,
    language: props.language
  })
  // 监听编辑器content变化事件
  editor.value.onDidChangeModelContent(() => emit('change', getEditorValue()))
}

/**
 * 增加语法提示
 * @date 2022-04-07
 * @param {string} editorLanguage 编辑器语言
 */
const addHint = (editorLanguage: string = props.language) => {
  monaco.languages.registerCompletionItemProvider(editorLanguage, {
    provideCompletionItems: (model: any, position: any) => {
      const { lineNumber } = position
      const { startColumn, endColumn } = model.getWordUntilPosition(position)
      const content = model.getLineContent(lineNumber)  // 当前输入行内容
      const range = {
        startLineNumber: lineNumber,
        endLineNumber: lineNumber,
        startColumn,
        endColumn
      }
      return {
        suggestions: currentHints(content).map((hint: any) => {
          if (typeof(hint) === 'string') {
            return { label: hint, insertText: hint, range }
          } else {
            'kind' in hint && (hint.kind = monaco.languages.CompletionItemKind[hint.kind])
            return { ...hint, range }
          }
        })
      }
    },
    triggerCharacters: ['', '.']  // 写触发提示的字符，可以有多个
  })
}

// 当前提示
const currentHints = (content: string): Array<any> => {
  const HintList = {
    custom: ['aaa', 'bbb'],
    aaa: ['a-1', 'a-2'],
    bbb: ['b-1', 'b-2']
  }
  for (let [key, value] of Object.entries(HintList)) {
    if (content.endsWith(`${key}.`)) return value
  }
  return props.hints
}

/**
 * 获取编辑器文本
 * @date 2022-04-07
 * @returns {string}
 */
const getEditorValue = () => {
  return toRaw(editor.value).getValue()
}

// 暴露函数
defineExpose({
  initEditor,
  addHint,
  getEditorValue
})
</script>