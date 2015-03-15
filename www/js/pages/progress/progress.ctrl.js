angular.module('progress.ctrl',
    [
        'service.user'
    ]
)

.controller('progressCtrl',

            ['$scope','UserService',
    function ($scope , UserService ) {

        var promise = UserService.getCurrentUser()
            .then(setScopeStates)

        function setScopeStates(user) {
            $scope.states = user.states;
        }

    }
]);
