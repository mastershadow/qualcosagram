require.config({
    baseUrl: "js",    
    paths: {
    	'jquery': '../bower_components/jquery/jquery.min',
    	'jquery-backstretch': '../bower_components/jquery-backstretch/jquery.backstretch.min',
    	'countdown': '../bower_components/countdown/dest/jquery.countdown.min',
        'angular': '../bower_components/angular/angular.min',
        'angular-route': '../bower_components/angular-route/angular-route.min',
        'angularAMD': '../bower_components/angularAMD/angularAMD.min',
        'moment': '../bower_components/moment/min/moment.min'
    },
    shim: { 
    	'angularAMD': ['angular'], 
    	'angular-route': ['angular'], 
    	'jquery-backstretch': ['jquery'], 
    	'countdown': ['jquery']
    },
    deps: ['app']
});