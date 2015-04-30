starSounds.controller('ProjectsCtrl', function ProjectsCtrl($scope, $location) {

    $scope.loadView = function(view) {
        console.log(view);
        $location.path(view);
        // console.log("ViewLoaded");
    }


})
