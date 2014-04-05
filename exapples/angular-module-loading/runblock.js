// Let's say that we want to run a function that validates that we have an authenticated user every time that we change our routroute.
// The only logical place to set this functionality is in the run method:

angular.module('myApp', [])
.run(function($rootScope, AuthService) { $rootScope.$on('$routeChangeStart',
	function(evt, next, current) {
		// If the user is NOT logged in
		if (!AuthService.userLoggedIn()) {
			// Already heading to the login route so no need to redirect
		} else {
			$location.path('/login');
			}
		}
	)};
});