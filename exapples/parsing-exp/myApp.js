var app = angular.module('myApp', [])
.controller('MyController',
function($scope, $parse) {
	$scope.$watch('expr', function(newVal, oldVal, scope) {
		if (newVal !== oldVal) {
			// Let's set up our parseFun with the expression
			var parseFun = $parse(newVal);
			// Get the value of the parsed expression
			$scope.parsedValue = parseFun(scope);
		}
	});
});