var portfolio = angular.module('portfolio', ['ngRoute']);

portfolio.directive('enter', function() {
    return function(scope, element, attr) {
        element.bind('mouseover', function() {

            if (attr.enter == "All") {
                scope.only.JS = "";
                scope.only.Angular = "";
                scope.only.PHP = "";
            } else {

                scope.only.JS = "this";
                scope.only.Angular = "this";
                scope.only.PHP = "this";
                scope.only[attr.enter] = "";

            }
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
