angular.module('app')
.controller('appCtrl' ,['$scope',function($scope){
        $scope.MenuDisplay = true;
        $scope.to = function(){
            window.location.hash='listheader';
        }
}]);
