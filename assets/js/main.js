//backbone tutorial part 3


//namespaces
(function(){

	window.App = {
		Models: {},
		Collections: {},
		Views: {},
		Router: {},
	};

	//helper to render templates
	window.template = function(id){
		return _.template( $("#" + id).html() );
	};

	App.Router = Backbone.Router.extend({
		routes : {
			'' : 'index',
			'show/:id': 'show'
		},

		index : function(){
			console.log('hi there from the index page');
		},

		show : function(id){
			console.log('hi from show page of id: ' + id);
		}
	});

	new App.Router;
	Backbone.history.start();

})();




