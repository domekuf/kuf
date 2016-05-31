var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var kuf = angular.module('kufApp', 
	['ngRoute'
	//,'getmeControllers'
	,'ngMaterial'
	,'ngMessages'
  ,'ngAnimate'
]);

kuf.config(['$routeProvider', function(routeProvider){
  return;
	console.log('config');
	routeProvider
		.when('/login', {
			templateUrl: '/views/login.html',
			controller: 'loginController',
		})
		.when('/guide', {
			templateUrl: '/views/guide.html',
			controller: 'guideController'
		})
		.when('/settings', {
			templateUrl: '/views/settings.html',
			controller: 'settingsController'
		})
		.when('/menu', {
			templateUrl: '/views/products.html',
			controller: 'productsController'
		})
		.when('/places', {
			templateUrl: '/views/places.html',
			controller: 'placesController'
		})
		.otherwise({
			redirectTo: '/',
		})
		;
}]);

kuf.config(function($mdThemingProvider) {


   	$mdThemingProvider.definePalette('gMyellow', { //green 00695c yellow ffc107
    '50'  : 'ffc107',
    '100' : 'ffc107',
    '200' : 'ffc107',
    '300' : 'ffc107',
    '400' : 'ffc107',
    '500' : 'ffc107',
    '600' : 'ffc107',
    '700' : 'ffc107',
    '800' : 'ffc107',
    '900' : 'ffc107',
    'A100': 'ffc107',
    'A200': 'ffc107',
    'A400': 'ffc107',
    'A700': 'ffc107',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  	$mdThemingProvider.theme('default')
        .primaryPalette('lime')
        .accentPalette('amber')
        .warnPalette('red')
        .backgroundPalette('grey');
});
