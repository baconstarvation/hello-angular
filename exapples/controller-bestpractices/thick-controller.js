var app = angular.module('myApp', [])
.controller('MyController', function($scope) {
	$scope.shouldShowLogin = true;
	$scope.showLogin = function() {
		$scope.shouldShowLogin = !$scope.shouldShowLogin;
	}
	$scope.clickButton = function() {
		$("#btn span").html("Clicked");
	}
		$scope.onLogin = function(user) {
			$http({
				method: 'POST',
				url: '/login',
				data: {
					user: user
				}
			}).success(function(data) {
				// user
			})
		}
	}
});

// we can actually transform our controller using directives and services into a much thinner, more manageable one: