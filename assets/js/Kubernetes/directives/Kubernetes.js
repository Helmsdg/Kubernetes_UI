var app = angular.module('app.kubernetes', ['restangular']);

app.directive('kubeoptions', function() {
    return {
        restrict: 'E',
        templateUrl: "views/kube/Directive.html",
        controller: function (KubernetesService) {
            var self = this;
            self.result = [];
            self.showLoading = false;

            var resetResults = function(newShowLoading){
                result = [];
                self.showLoading = newShowLoading;
            };

            self.getAllNodes = function(){
                resetResults(true);
                KubernetesService.getAllNodes(function(value){
                    self.result = value;
                    self.showLoading = false;
                });
            };

            if(self.result = []){
                self.getAllNodes();
            }

        },
        controllerAs: "kubeMain"
    };
});