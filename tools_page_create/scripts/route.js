
angular.module('app')
.config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/main.template.html',
            controller  : 'mainController'
        })
        .when('/listheader', {
            templateUrl : 'views/listheader.template.html',
            controller  : 'ListHeaderController'
        })
}])