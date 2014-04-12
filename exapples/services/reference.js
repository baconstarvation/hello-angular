// factory()
// name (string); getFn(function)
angular.module('myApp')
.factory('myService', function() {
	return {
		'username': 'auser'
	}
});

angular.module('myApp')
.factory('githubService', [
	'$http', function($http) {
		return {
			getUserEvents: function(username) {
				// ...
			}
		}	
}]);


// service()
// name(string); constructor(function)
var Person = function($http) {
	this.getName = function() {
		return $http({
			method: 'GET',
			url: '/api/user'
		});
	};
};
angular.service('personService', Person);



// provider
	// name (string)
	// aProvider (object/function/array)

angular.module('myApp')
.factory('myService', function() {
	return {
		'username': 'auser'
	}
})
// This is equivalent to the
// above use of factory
.provider('myService', {
	$get: function() {
		return {
			'username': 'auser'
		}
	}
});

// register the servie using '/provider'
angular.module('myApp', [])
.provider('githubService', function($http) {
	// default, private state
	var githubUrl = 'https://github.com'

	setGithubUrl: function(url) {
		// change default via .config
		if (url) { githubUrl = url }
	}
	method: JSONP, // override me, if you want

	$get: function($http) {
		self = this;
		return $http({
			method: self.method,
			url: githubUrl + '/events'
		});
	}
});

angular.module('myApp', [])
.config(function(githubServiceProvider) {
	githubServiceProvider
		.setGithubUrl("git@github.com");
})


/// Example of creating a provider directly on the module object
angular.module('myApp', [])
.provider('UserService', {
	favoriteColor: null,
	setFavoriteColor: function(newColor) {
		this.favoriteColor = newColor;
	}.
	// the $get function can take injectables
	$get: function($http) {
		return {
			'name': 'Ari',
			getFavoriteColor: function() {
				return this.favoriteColor || 'unknown';
			}
		}
	}
});


// constant()
// name (string); value (constant value)
// this argument gives the value to register as the constant.

// returns a registered service instance
angular.module('myApp')
.constant('apiKey', '123123123')

// We can now inject this value into a configuration function just like any other service:
angular.module('myApp')
.controller('MyController',
	function($scope, apiKey) {
		// We can use apiKey as a constant
		// string as 123123123 set from above
	});


// value()
// name(string), value(value)
angular.module('myApp')
.value('apiKey', '123123123');

// When to use Value or constant
	// you can inject a constant into a config function, but you cannot inject a value into a config function

angular.module('myApp', [])
.constant('apiKey', '123123123')
.config(function(apiKey) {
	// The apiKey here will resolve to 123123123
	// as we set above
})
.value('FBid', '231231231')
.config(function(FBid) {
	// This will throw an error with
	// Unknown provider: FBid
	// because the value is not accessible by
});


// decorator()
	// intercept, interrupt, and even replace functionality in the core Angular services.
	// name(string), decoratorFn (function)

var githubDecorator = function($delegate, $log) {
	var events = function(path) {
		var startedAt = new Date();
		var events = $delegate.events(path);
		// Events is a promise
		events.finally(function() {
			$log.info("Fetching events" + " took " + (new Date() - startedAt) + "ms");
		});
	return events;
};

angular.module('myApp')
.config(function($provide) {
	$provide.decorator('githubService',
		githubDecorator);
});




































