requirejs.config({
	baseUrl: 'js',
	paths: {
		text: 'plugin/text',
		zepto: 'libs/zepto',
		backbone : 'libs/backbone',
		underscore : 'libs/underscore',
		gbone: 'libs/gbone',
		backboneRelational: 'libs/backbone-relational',
		zeptogfx: 'libs/zepto-gfx'
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'zepto': {
			exports: '$'
		},
		'backbone': {
			deps: ['underscore', 'zepto'],
			exports: 'Backbone'
		},
		'gbone': {
			deps: ['backbone', 'zeptogfx'],
			exports: 'Gbone'
		},
		'backboneRelational': {
			deps: ['zepto', 'underscore', 'backbone']
		},
		'app': {
			deps: ['zepto', 'underscore', 'backbone', 'gbone', 'backboneRelational']
		}
	}
});


require(['app'], function(App) {
	App.init();
});
