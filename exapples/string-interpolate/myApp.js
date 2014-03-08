var app = angular.module('myApp', ['emailParser'])
	.controller('MyController',
		['$scope', 'EmailParser',
			function($scope, EmailParser) {
				// Set up a watch
				$scope.$watch('emailBody', function(body) {
					if (body) {
						$scope.previewText =
							EmailParser.parse(body, {
								to: $scope.to
							});
					}
				});
}]);

angular.module('emailParser', [])
	.config(['$interpolateProvider',
		function($interpolateProvider) {
			$interpolateProvider.startSymbol('__');
			$interpolateProvider.endSymbol('__');
}])
.factory('EmailParser', ['$interpolate',
	function($interpolate) {
		// a service to handle parsing
		return {
			parse: function(text, context) {
				var template = $interpolate(text);
				return template(context);
			}
		}
}]);

// The interpolate service takes up to three parameters, with only one required function:
	// text(string) - The text with markup to interpolate.
	// mustHaveExpression (boolean) - If we set parameter to true, then the text will return null if there is no expression.
	// trustedContext - Angular sends the result of the interpolation context through the $sce.getTrusted() method, which
		// provides strict contextual escaping.


