angular.module('app')
.controller('appCtrl' ,['$scope',function($scope){

        var self = this;
        self.pageList = {
            1: 'listheader',
            2: 'formlist'
        }

        $scope.MenuDisplay = false;
        $scope.toPage = function(num){
            window.location.hash= self.pageList[num];
        }
}]);
