<!DOCTYPE html>
<html ng-app="myApp">
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular.js"></script>
</head>
<body>

<div ng-app-"myApp">
	<div ng-controller="MyController">
	</div>
</div>

<script>
	var aControllerFactory =
		function aController($scope, greeter) {
			console.log("LOADED controller", greeter);
			// ... Controller
		};
	aControllerFactory.$inject = ['$scope', 'greeter'];
	// Greeter service
	var greeterService = function() {
		console.log("greeter service");
	}
	// Our app controller
	angular.module('myApp', [])
		.controller('MyController', aControllerFactory)
		.factory('greeter', greeterService);
	// Grab the injector and create a new scope
	var injector = angular.injector(['ng', 'myApp']),
		controller = injector.get('$controller'),
		rootScope  = injector.get('$rootScope'),
		newScope   = rootScope.$new();
	// Invoke the controller
	controller('MyController', {$scope: newScope});
</script>

</body>
</html>