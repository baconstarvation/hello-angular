// Skipping 'Our First Directive' for now. moving onto Expressions (pg. 61) to make use of another live example

var app = angular.module('myApp', [])
.directive('myDirective', function() {
	return {
		restrict: 'E',
		template: '<a href="http://google.com">
		Click me to go to Google</a>'
	}
});
