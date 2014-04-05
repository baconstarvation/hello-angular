
angular.module('validationExample', [])
.directive('ensureUnique', function($http) {
	return {
		require: 'ngModel',
		link: function(scope, ele, attrs, c) {
			scope.$watch(attrs.ngModel, function() {
				$http({
					method: 'POST',
					url: '/api/check' + attrs.ensureUnique,
					data: {'field': attrs.ensureUnique}
				}).success(function(data,status,headers,cfg) {
					c.$setValidity('unique', data.isUnique);
				}).error(function(data,status,headers,cfg) {
					c.$setValidity('unique', false);	
				});
			});
		}
	}
});

<input type="text"
			 placeholder="Desired username"
			 name="username"
			 ng-model="signup.username"
			 ng-minlength=3
			 ng-maxlength=20
			 ensure-unique="username" required />