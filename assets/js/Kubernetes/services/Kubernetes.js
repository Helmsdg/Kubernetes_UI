var app = angular.module('app');
app.factory('KubernetesService', ['Restangular', function(RestService){
    var self = this;

    return {
        getAllNodes:function (callback) {
            RestService.one('v1').customGET("nodes").then(function (results) {
                callback(results.plain());
                console.log(results.plain());
            }, function (results) {
                callback(results.data);
            });
        }
    };


}]);