angular.module('myApp')
.directive('myDirective', function() {
	return {
		require: '?ngModel',
		link: function(scope, ele, attrs, ngModel) {
			if(!ngModel) return;

			ngModel.$render = function() {
				element.html(
					ngModel.$viewValue() || 'None'
				);
			}
		}
	};
});