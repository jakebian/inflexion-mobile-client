angular.module('overview.ctrl',
    [
        'service.user',
        'global'
    ]
)

.controller('overviewCtrl',
            ['$scope','UserService',
    function ($scope , UserService) {
        UserService.getCurrentUser().then(setUser);
        function setUser(user) {
            $scope.user = user;
            console.log($scope.user);
        }
    }
]);