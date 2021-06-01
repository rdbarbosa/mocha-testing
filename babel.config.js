module.exports = (api) => {
	const presets = ["react-app"];
	const plugins = [
		"@babel/plugin-transform-modules-commonjs",
		"inline-react-svg",
		"istanbul",
	];

	api.cache(false);

	return {
		presets,
		plugins,
	};
};
