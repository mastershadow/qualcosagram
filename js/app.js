define(['angularAMD', 'jquery', 'angular-route', 'jquery-backstretch', 'countdown'], 
	function (angularAMD, jQuery) {
    var app = angular.module("webapp", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider.when("/:qualegram?", angularAMD.route({
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl',
            controllerUrl: 'ctrl/home'
        })).
      	otherwise({
        	redirectTo: '/'
      	});
    });
    
	app.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
	    var original = $location.path;
	    $location.path = function (path, reload) {
	        if (reload === false) {
	            var lastRoute = $route.current;
	            var un = $rootScope.$on('$locationChangeSuccess', function () {
	                $route.current = lastRoute;
	                un();
	            });
	        }
	        return original.apply($location, [path]);
	    };
	}])

    return angularAMD.bootstrap(app);
});
