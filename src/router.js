define(function(require, exports, module) {


	
	require('./views/common/headerview');
	require('./views/common/footerview');
			
	window.app = {
		model:{},
		view:{},
		collection:{},
		htmlbody:$('#pageapp'),
		temp: {}
	};

	var AppRouter = Backbone.Router.extend({
	    routes: {    		
	    },
	
	    initialize: function () {
			app.view.header = new HeaderView({ el: $("#headerbox")} );
			app.view.footer = new FooterView({ el: $("#footerbox")} );		  
	    },
	    
	    renderAll: function(){
			app.view.header.render();
			app.view.footer.render();
	    },
	
	});	
	
	exports.initialize = function() {
		new AppRouter();
		Backbone.history.start(); //当所有的 路由 创建并设置完毕，调用 Backbone.history.start() 开始监控 hashchange 事件并分配路由
	};
})


