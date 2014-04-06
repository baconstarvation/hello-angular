// $routeChangeStart
angular.module('myApp', [])
.run(['$rootScope', '$location', function($rootScope, $location) {
	$rootScope.$on('$routeChangeStart',
		function(evt, next, current) {
		})
}])


// $routeChangeSuccess
angular.module('myApp', [])
.run(['$rootScope', $location, function($rootScope, $location) {
	$rootScope.$on('$routeChangeSuccess', function(evt, next, previous) {
	})
}])


// $routeChangeError
angular.module('myApp', [])
.run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeError'.
		function(current, previous, rejection) {
		})
})