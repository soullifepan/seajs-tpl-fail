define(function(require, exports, module) {

	var headerviewTemplate = require('../../templates/common/header.tpl');
	
	window.HeaderView = Backbone.View.extend({
		
		initialize: function () {
	        this.render();
	    },

	    render: function () {
   
			var template = _.template( headerviewTemplate );
			
			$(this.el).html(template);
			
	        return this;
	    }
	});


})


