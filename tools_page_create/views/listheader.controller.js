angular.module('app')
    .controller('ListHeaderController' ,['$scope',function($scope){
        $scope.content = '';
        $scope.changeContent = function(content) {
            var _items = content.split('\n');
            var items = [];
            for(var i =0;i<_items.length;i++){
                var _item = {};
                _item.width = _items[i].split(';')[0];
                _item.label = _items[i].split(';')[1];
                _item.labelproperty = _items[i].split(';')[2];
                items.push(_item);
            }
            $scope.items = items;
        };
    }]);