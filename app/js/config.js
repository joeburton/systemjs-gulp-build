SystemJS.config({
	map: {
		'plugin-babel': '../../systemjs-plugin-babel/plugin-babel.js',
		'systemjs-babel-build': '../../systemjs-plugin-babel/systemjs-babel-browser.js'
	},
	transpiler: 'plugin-babel'
});