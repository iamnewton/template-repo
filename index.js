const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				use: { loader: 'babel-loader' },
			}, {
				test: /\.md$/,
				use: { loader: 'raw-loader' },
			}, {
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								require('autoprefixer')({
									replace: true,
									cascade: false,
								}),
							],
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								indentWidth: 4,
								includePaths: [
									'node_modules/',
								],
							},
						},
					},
				],
				include: path.resolve(__dirname, '../../'),
			},
		],
	},
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
	},
};
