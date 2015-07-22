'use strict';
var app = angular.module('app');
var baseURL = 'http://127.0.0.1:8080/';
app.config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl(baseURL + 'api');
    RestangularProvider.setDefaultHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
});

app.constant('API', '/api');

//Define Routing for app
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/Dashboard', {
                templateUrl: 'templates/dashboard/index.html'
            }).
            otherwise({
                redirectTo: '/Dashboard'
            });
    }]);