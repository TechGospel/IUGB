const webpack = require('webpack');
module.exports = {
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.plugins.push(
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
			})
		);
		return config;
	},
	env: {
		LOCAL_URL: 'http://localhost:3000',
		BASE_URL: 'https://iugb.netlify.app',
		MONGODB_URL:
			'mongodb+srv://IUGB:IUGBPASS@cluster0.ho3oo.mongodb.net/?retryWrites=true&w=majority',
		ACCESS_TOKEN_SECRET: '0,j,WHtca]tU`)?{8_R9vf<(8W7$',
		REFRESH_TOKEN_SECRET: '_Wxx/tc`m+KD.=UiKG~{8J;f3FHRx2',
		//PAYMENT_CLIENT_ID: 'YOUR_PAYPAL_CLIENT_ID',
		CLOUD_UPDATE_PRESET: 'ml_default',
		CLOUD_NAME: 'dzrolbdih',
		CLOUD_API:
			'cloudinary://877142615766632:_YOEe5Rw6T1FHlTO3ilGoNlqEh4@dzrolbdih',
	},
};
