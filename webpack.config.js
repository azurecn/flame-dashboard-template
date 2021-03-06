module.exports = function() {
	return {
		entry: './index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'app.js'
		},
		module: {
			rules: [{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}]
		},
	}
};