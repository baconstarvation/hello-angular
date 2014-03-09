angular.module('myApp')
	.directive('oneToTen', function() {
		return {
			require: '?ngModel',
			link: function(scope, ele, attrs, ngModel) {
				if (!ngModel) return;

				ngModel.$formatters.unshift(function(v) {
					return $filter('number')(v);
				});
			}
		};
});