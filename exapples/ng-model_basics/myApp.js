
angular.module('myApp')
.directive('myDirective', function() {
	return {
		require: '?ngModel',
		link: function(scope, ele, attrs, ngModel) {
			if (!ngModel) return;

			$(function() {
				ele.datepicker({
					onSelect: function(date) {
						// set the view and call apply
						scope.$apply(function() {
							ngModel.$setViewValue(date);
						});
					}
				})
			});
		}
	};
});