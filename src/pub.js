define(function(require, exports, module) {

    var $ = jQuery = require('jquery');
	var Backbone = require('backbone');
	var _ = require('underscore');
	var Handlebars = require('handlebars');

	window.$ = $;
	window.Backbone = Backbone;
	window._ = _;
	window.Handlebars = Handlebars;

	require('bootstrap')($);


	$(function() {				
		var authorRouter = require('./router');
		authorRouter.initialize();
	});
});
