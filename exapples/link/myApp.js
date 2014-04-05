
angular.module('myApp', [])
.directive('myDirective', function() {
	return {
		pre: function(tElement, tAttrs, transclude) {
			// executed before child elements are linked
			// NOT safe to do DOM transformations here b/c the link function
			// called afterward will fail to locate the elements for linking
		},
		post: function(scope, iElement, iAttrs, controller) {
			// executed after the child elements are linked
			// IS safe to do DOM transformations here
			// same as the link function, if the compile option here we're
			// omitted
		}
	}
});

angular.module('myApp', [])
.directive('myDirective', function() {
	return {
		return {
			pre: function(tElement, tAttrs, transclude) {
				// executed before child elements are linked
				// NOT safe to do DOM transformations here b/c the link function
				// called afterward will fail to locate the elements for linking
			},
			post: function(scope, iElement, iAttrs, controller) {
				// executed after the child elements are linked
				// IS safe to do DOM transformations here
				// same as the link function, if the compile option here we're
				// omitted
			}
		}
	}
});


// The link function has the following signature:
link: function (scope, element, attrs) {
	// manipulate the DOM in here
}

require 'SomeController',
link: function (scope, element, attrs, SomeController) {
	// manipulate the DOM in here, with access to the controller of the required directive
}





















