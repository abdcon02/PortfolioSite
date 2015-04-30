var starSounds = angular.module('starSounds', ['ngRoute']);

    starSounds.config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/project1', {
                templateUrl : "partials/project1.html"
            })
            .when('/project2', {
                templateUrl : "partials/project2.html"
            })
            .when('/project3', {
                templateUrl : "partials/project3.html"
            });
        //
        $locationProvider.html5Mode(true);
    });
