// Overriding CreateReactApp settings, ref: https://github.com/arackaf/customize-cra
const antdTheme = require('./src/theme.js');
const {
	override,
	fixBabelImports,
	addLessLoader,
	useEslintRc,
	addDecoratorsLegacy,
} = require('customize-cra');

const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

function ride(config, env) {
	config.resolve.plugins = config.resolve.plugins.filter(
		plugin => !(plugin instanceof ModuleScopePlugin),
	);

	return config;
}

module.exports = override(
	addDecoratorsLegacy(),
	useEslintRc(),
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: antdTheme,
	}),
);
