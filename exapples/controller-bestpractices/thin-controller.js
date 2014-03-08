var app = angular.module('myApp', [])
.controller('MyController', function($scope, UserSrv) {
	// The content can be controlled by directives
	$scope.onLogin = function(user) {
		User.Srv.runLogin(user);
	}
})
