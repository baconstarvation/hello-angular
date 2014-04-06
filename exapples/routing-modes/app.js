// hashbang mode
angular.module('myApp', ['ngRoute'])
.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(false);
}]);

// configure hashPrefix
angular.module('myApp', ['ngRoute'])
.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(false);
	$locationProvider.hashPrefix('!');
}]);

