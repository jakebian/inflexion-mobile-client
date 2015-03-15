angular.module('stats.ctrl',
    [
        'ionic',
        'service.session',
        'service.user'
    ]
)

.controller('statsCtrl',

            ['$scope','$stateParams','SessionService','UserService',
    function ($scope , $stateParams , SessionService , UserService) {
        if ($stateParams.sessionId) {
            var sessionId = $stateParams.sessionId;
            SessionService.getSession(sessionId).success(setScopeSession);
        }
        else {
            var sessionId;
            UserService.getCurrentUser().then(function (user) {
                sessionId = user.completedSessions[0].id;
            }).then(function() {
                SessionService.getSession(sessionId).success(setScopeSession);
            });
        }

        function setScopeSession(session) {
            $scope.session = session;
        }
    }
]);
