angular.module("myApp", [])
.controller('MyController',
function($scope) {
	$scope.name = "baconator";
});


/* using $rootScope
angular.module('myApp', [])
	.run(function($rootScope) {
		$rootScope.name = "World";
});
*/