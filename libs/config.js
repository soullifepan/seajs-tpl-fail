
seajs.config({
	alias: {
		'$': 'jquery/1.7.2/jquery.js',
	    'jquery': 'jquery/1.7.2/jquery.js',
	    
        'underscore': 'underscore/1.3.3/underscore.js',
	    'backbone': 'backbone/0.9.2/backbone.js',	    
	    
		'backbonemodelbinder': 'backbonemodelbinder/backbone-modelbinder.js',
	    'backbonevalidation': 'backbonevalidation/backbone-validation-amd.js',	    
	    
	    'handlebars': 'handlebars/1.0.0/handlebars.js',
	    
	    'bootstrap': 'bootstrap/bootstrap.js',	    
	    'tbs-affix': 'bootstrap/bootstrap-affix.js',
	    'tbs-alert': 'bootstrap/bootstrap-alert.js',
	    'tbs-button': 'bootstrap/bootstrap-button.js',
	    'tbs-carousel': 'bootstrap/bootstrap-carousel.js',
	    'tbs-collapse': 'bootstrap/bootstrap-collapse.js',
	    'tbs-dropdown': 'bootstrap/bootstrap-dropdown.js',
	    'tbs-modal': 'bootstrap/bootstrap-modal.js',
	    'tbs-popover': 'bootstrap/bootstrap-popover.js',
	    'tbs-scrollspy': 'bootstrap/bootstrap-scrollspy.js',
	    'tbs-tab': 'bootstrap/bootstrap-tab.js',
	    'tbs-tooltip': 'bootstrap/bootstrap-tooltip.js',
	    'tbs-transition': 'bootstrap/bootstrap-transition.js',
	    'tbs-typeahead': 'bootstrap/bootstrap-typeahead.js',
	    
		'cookie': 'cookie/1.0.2/cookie',
	    
		'baseurl': 'http://localhost:8000/',
		'jsurl': '/src'
	},

	map: [
		['http://www.ibookstar.com/index/', 'http://localhost:8080/web/']
    ],

	preload: ['seajs/plugin-json', 'seajs/plugin-text'],
	debug: 0
	
});

seajs.use('jsurl/pub.js');	
