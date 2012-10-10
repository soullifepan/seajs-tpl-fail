define("#pub/views/common/headerview-debug", [], function(require, exports, module) {

	var headerviewTemplate = '<div class="navbar-inner" id="headerbox2"><div class="container-fluid"><a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a><div class="brand">发布管理系统</div><div class="btn-group pull-right"><a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><i class="icon-user"></i>用户名<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#">个人信息</a></li><li class="divider"></li><li><a href="#">退出登录</a></li></ul></div><div class="nav-collapse"><ul class="nav nav-head"><li class="active"><a href="#">作者</a></li><li ><a href="#user/list">用户管理</a></li></ul></div><!--/.nav-collapse --></div></div>';
	
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




define("#pub/views/common/footerview-debug", [], function(require, exports, module) {

	var footerviewTemplate = require('../../templates/common/footer.tpl');
	
	window.FooterView = Backbone.View.extend({
		
		initialize: function () {
	        this.render();
	    },
	
	    render: function () {
   
			var template = _.template( footerviewTemplate );
			
			$(this.el).html(template);
			
	        return this;
	    }
	});

})


define("#pub/router-debug", ["./views/common/headerview-debug", "./views/common/footerview-debug"], function(require, exports, module) {


	
	require('./views/common/headerview-debug');
	require('./views/common/footerview-debug');
			
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




define("#pub/pub-debug", ["./views/common/headerview-debug", "./views/common/footerview-debug", "./router-debug", "jquery-debug", "backbone-debug", "underscore-debug", "handlebars-debug", "bootstrap-debug"], function(require, exports, module) {

    var $ = jQuery = require('jquery-debug');
	var Backbone = require('backbone-debug');
	var _ = require('underscore-debug');
	var Handlebars = require('handlebars-debug');

	window.$ = $;
	window.Backbone = Backbone;
	window._ = _;
	window.Handlebars = Handlebars;

	require('bootstrap-debug')($);


	$(function() {				
		var authorRouter = require('./router-debug');
		authorRouter.initialize();
	});
});
