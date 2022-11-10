#### flame 请求封装

* 示例查看

  1. 启动项目，切换至`/login`路由下，通过登录接口获取token

  2. 示例页面按钮对应flameAxios、flameRequest、flameApi请求

     文件地址`src/views/MobileSetting/MobileSetting.vue`

* 使用说明

  * axios

    需要完全自定义时使用

  * flameAxios

    需要对状态码、业务码预处理的请求时使用

    状态码为200时流程继续，否则提示“网络异常，请稍后再试！”

    业务码`return_code`为0时流程继续，否则提示`return_msg`错误

  * flameRequest

    需要请求非基础api的自定义的内部接口时使用

    会自动补全method，根据白名单补全`app_id`或`token`

    可自定义服务、接口

  * flameApi

    需要请求基础api（singleAdd等）时使用

    ```js
    flameApi.singleAdd()
    ```

    