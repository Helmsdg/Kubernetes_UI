'use strict';

angular.module('app.rest', []);
angular.module('app.kubernetes', []);
angular.module('app', ['app.rest', 'app.kubernetes', 'restangular', 'ngRoute', 'ngPrettyJson', 'datePicker', 'JSONedit']);