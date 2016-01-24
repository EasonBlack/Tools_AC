angular.module('app', ['ngLodash', 'ngRoute'])
    .directive('afterRender', [function () {
        var def = {
            restrict: 'A',
            link: function (scope, element, attrs) {
                if (attrs) {
                    scope.$eval(attrs.afterRender)
                }
                scope.$emit('onAfterRender')
            }
        };
        return def;
    }]);