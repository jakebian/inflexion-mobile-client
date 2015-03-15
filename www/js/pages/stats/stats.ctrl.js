angular.module('stats.ctrl',
    [
        'ionic',
        'service.session'
    ]
)

.controller('statsCtrl',

            ['$scope','$stateParams','SessionService',
    function ($scope , $stateParams , SessionService) {
        var sessionId = $stateParams.sessionId;
        if (!sessionId) {
            return;
        }


        SessionService.getSession(sessionId).success(setScopeSession);

        function setScopeSession(session) {
            $scope.session = session;
        }
    }
]);
