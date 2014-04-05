angular.module('myApp', [])
	.config(function($provide) {
	});


// creating a factory on top of the module
angular.module('myApp', [])
.factory('myFactory', function() {
	var service = {};
	return service;
})
.directive('myDirective', function() {
	return {
		template: '<button>Click me</button>'
	}
})

// the factory on top (on top) of the module is equivalent to:
angular.module('myApp', [])
.config(function($provide, $compileProvider) {
	$provide.factory('myFactory', function() {
		var service = {};
		return service;
	});
	$compileProvider.directive('myDirective',
		function() {
			return {
				template: '<button>Click me</button>'
			}
		})
});

// another example
angular.module('myApp'. [])
.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'WelcomeController',
		template: 'views/welcome.html'
	});
})
.config(function(ConnectionProvider) {
	ConnectionProvider.setApiKey('SOME_API_KEY');
})







