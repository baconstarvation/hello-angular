// Example service that holds on to the
// current_user for the lifetime of the app
angular.module('myApp', [])
.factory('UserService', function($http)) {
	var current_user;

	return {
		getCurrentUser: function() {
			return current_user;
		},
		setCurrentUser: function(user) {
			current_user = user;
		}
	}
}

// The most common
// and flexible way to create a service uses the angular.module API factory
angular.module('myApp.services', [])
	.factory('githubService', function() {
		var serviceInstance = {};
		// Our first service
		return serviceInstance;
	});

// Creating the factory through using the bracket notation
angular.module('myApp.services', [])
	.factory('githubService', [function($http) {
	}]);

// Creating the factory in full using the bracket notation
angular.module('myApp.services', [])
	.factory('githubService', function($http) {
		// Our serviceInstance now has access to
		// the $http service in its function definition
		var serviceInstance = {};
		return serviceInstance;
	});

// Expose a method on our service.
// Place it as an attribute on the service object
angular.module('myApp.services', [])
	.factory('githubService', function($http) {
		var githubUrl = 'https://api.github.com';

		var runUserRequest = function(username, path) {
			// Return the promise from the $http service
			// that calls the Github API using JSONP
			return $http({
				method: 'JSONP',
				url: githubUrl + '/users' +
							username + '/' +
							path + '?callback=JSON_CALLBACK'
			});
		}
		// Return the service object with a single function
		// events
		return {
			events: function(username) {
				return runUserRequest(username, 'events');
			}
		};
	});










