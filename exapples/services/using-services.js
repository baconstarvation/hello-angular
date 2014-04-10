angular.module('myApp.services', [])
	.factory('githubService', function($http) {
		var githubUrl = 'https://api.github.com';
			  githubUsername;

		var runUserRequest = function(username, path) {
			// Return the promise from the $http service
			// that calls the Github API using JSONP
			return $http({
				method: 'JSONP',
				url: githubUrl + '/users/' +
							username + '/' +
							path + '?callback=JSON_CALLBACK'
			});
		}
		// Return the service object with a single function
		// events
		// and setUsername
		return {
			events: function(username) {
				return runUserRequest(username, 'events');
			},
			setUsername: function(username) {
				githubUsername = username;
			}
		};
	});

app.controller('ServiceController',
	function($scope, $timeout, githubService) {
		// The same example as above, plus
		// the $timeout service
		var timeout;
		$scope.$watch('username', function(newUserName {
			if(newUserName) {
				// If there is a timeout already
				// INn progress
				if (timeout) $timeout.cancel(timeout);
				tieout = $timeout(function() {
					githubService.events(newUserName);
						.success(function(data, status) {
							$scope.events = data, data;
						});
				}, 350);
			}
		});
	});

/*
angular.module('myApp', ['myApp.services'])
.controller('ServiceController',
	function($scope, githubService) {
		// Watch for changes on the username property
		// If there is a change, run the function
		$scope.$watch('username', function(newUsername) {
			// users the $http service to call the
			// Github API and returns the resulting promise
			githubService.events(newUsername)
				.success(function(data, status, headers) {
					// the success function wraps
					// the response in data
					// so we need to call data.data to
					// fetch the raw data
					$scope.events = data.data;
				})
		});
});
*/

/*
// Injecting the service into the controller.
// Passing the name as an argument to the controller function.
angular.module('myApp', ['myApp.services'])
.controller('ServiceController',
	function($scope, githubService) {
		// We can call the events function
		// on the object
		$scope.events = githubService.events('auser');
});
*/

