// an initial controller
// create a module with a controller atop the module.
var app = angular.module('myApp', []);
app.controller('FirstController', function($scope) {
	$scope.counter = 0;
	$scope.add = function(amount) { $scope.counter += amount; };
	$scope.subtract = function(amount) { $scope.counter -= amount; }; 
});

// an initial controller in the global scope, which is not the best idea
/*
function FirstController($scope) {
	$scope.message = "hello";
};
*/
