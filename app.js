var portfolio = angular.module('portfolio', ['ngRoute']);

portfolio.directive('enter', function() {
    return function(scope, element, attr) {
        element.bind('mouseover', function() {
            console.log(attr.text);
            scope.hide = "this";
            scope.$apply();


        });
    };
});

    portfolio.config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/project1', {
                templateUrl : "partials/project1.html"
            })
            .when('/project2', {
                templateUrl : "partials/project2.html"
            })
            .when('/project3', {
                templateUrl : "partials/project3.html"
            })
            .otherwise({
                redirectTo: "/"
            });
        //
        $locationProvider.html5Mode(true);
    });
