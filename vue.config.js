// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');   // 官方插件包
const MonacoWebpackPlugin = require('monaco-editor-esm-webpack-plugin');  // 汉化插件包

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/flame-frame-web' : '/',
  lintOnSave: false,
  configureWebpack: {
    module: {
			rules: [{
				test: /\.js/,
				enforce: 'pre',
				include: /node_modules[\\\/]monaco-editor[\\\/]esm/,
				use: MonacoWebpackPlugin.loader
			}]
		},
		plugins: [
			new MonacoWebpackPlugin()
		]
  },
	devServer: {
		open: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/': {
        target: 'https://uat.cn-major.cn',
        changeOrigin: true,
				secure: true,
				pathRewrite: {
					'^/': ''
				},
      }
    }
	},
}