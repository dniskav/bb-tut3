//backbone tutorial part 3


//namespaces
(function(){

	window.App = {
		Models: {},
		Collections: {},
		Views: {},
		Router: {}
	};

	//helper to render templates
	window.template = function(id){
		return _.template( $("#" + id).html() );
	};

	App.Router = Backbone.Router.extend({
		routes : {
			'' : 'index',
			'show/:id': 'show',
			'download/*filename': 'download',
			'search/:query' : 'search',
			'*error' : 'default'
		},

		index : function(){
			console.log('hi there from the index page');
		},

		show : function(id){
			console.log('hi from show page of id: ' + id);
		},
		download : function(filename){
			console.log('downloading file id: ' + filename);
		},
		search : function(query){
			console.log('searching for: ' + query);
		},
		default : function(query){
			alert('mmm maybe you are lost... URL: ' + query);
		}
	});

	new App.Router;
	Backbone.history.start();

})();




