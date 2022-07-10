## monacoEditor 属性

| 属性         | 说明                                                         | 类型   | 可选值                                                       | 默认值                              |
| :----------- | :----------------------------------------------------------- | :----- | :----------------------------------------------------------- | :---------------------------------- |
| width        | 宽度                                                         | string | —                                                            | —                                   |
| height       | 高度                                                         | string | —                                                            | —                                   |
| editorId     | 编辑器唯一标识                                               | string | —                                                            | 自动生成UUID                        |
| editorConfig | 编辑器配置                                                   | object | —                                                            | [见下表](# editorConfig 编辑器配置) |
| value        | 默认展示内容                                                 | string | —                                                            | Hello, World!                       |
| language     | 编辑器语言                                                   | string | abap/apex/azcli/bat/bicep/cameligo/clojure/coffee/cpp/csharp/<br />csp/css/dart/dockerfile/ecl/elixir/flow9/fsharp/go/graphql/<br />handlebars/hcl/html/ini/java/javascript/julia/kotlin/less/lexon/<br />liquid/lua/m3/markdown/mips/msdax/mysql/objective-c/pascal/pascaligo/<br />perl/pgsql/php/pla/postiats/powerquery/powershell/protobuf/pug/python/<br />qsharp/r/razor/redis/redshift/restructuredtext/ruby/rust/sb/scala/<br />scheme/scss/shell/solidity/sophia/sparql/sql/st/swift/systemverilog/<br />tcl/twig/typescript/vb/xml/yaml/ | python                              |
| hints        | 编辑器提示，字符串或对象的数组<br />对象格式 label 和 insertText 为必填项 | array  | —                                                            | —                                   |

## monacoEditor 方法

| 方法名         | 说明                   | 参数                                  |
| :------------- | :--------------------- | :------------------------------------ |
| initEditor     | 初始化编辑器           | —                                     |
| addHint        | 向指定语言添加语法提示 | 同 language 属性可选项，默认为 python |
| getEditorValue | 获取编辑器内容         | —                                     |

## monacoEditor 事件

| 事件名 | 说明                 | 参数            |
| :----- | :------------------- | :-------------- |
| change | 在编辑器值改变时触发 | (event: string) |

## editorConfig 编辑器配置

* [参考文档](https://www.cnblogs.com/wangjiahui/p/15593048.html)

```js
{
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
  olding: true,                       // 是否启用代码折叠
  scrollBeyondLastLine: false,         // 设置编辑器是否可以滚动到最后一行之后
  renderLineHighlight: 'all',          // 当前行突出显示方式  "all" | "line" | "none" | "gutter"
  theme: 'vs-dark'                     // 官方自带三种主题vs, hc-black, or vs-dark
}
```

