var app = angular.module("st_hughs", ["ngRoute"]);

app.controller('StaticController', ['$scope', function($scope) {
	console.log("FOR SHOW PURPOSES ONLY");

}]); 

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({ enabled: true }); // tell angular to use push state
	$routeProvider.
	when('/', {
		templateUrl: 'partials/home.html',
		controller: 'StaticController',
		controllerAs: 'statCtrl'
	}).
	when('/contact', {
		templateUrl: 'partials/contact.html',
		controller: 'StaticController',
		controllerAs: 'statCtrl'
}).
	otherwise({
		redirectTo: '/'
	});
}]);