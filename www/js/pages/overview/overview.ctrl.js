angular.module('overview.ctrl',
    [
        'service.user',
        'global'
    ]
)

.controller('overviewCtrl',
            ['$scope','UserService','CurrentUser',
    function ($scope , UserService , CurrentUser) {
        UserService.getUser(CurrentUser.id).success(setUser);
        function setUser(user) {
            $scope.user = user;
            console.log($scope.user);
        }
    }
]);