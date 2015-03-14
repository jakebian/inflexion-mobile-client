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
        function setUser(result) {
            $scope.user = result.data;
            console.log($scope.user);
        }
    }
]);