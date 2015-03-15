angular.module('activity.ctrl',
    [
        'service.user'
    ]
)

.controller('activityCtrl',

            ['$scope','UserService','SessionService',
    function ($scope , UserService , SessionService) {

        var promise = UserService.getCurrentUser()
            .then(setCurrentSessionId)
            .then(fetchCurrentSession)
            .then(setCurrentSession);

        var currentSessionId;

        function setCurrentSessionId(user) {
            currentSessionId = user.scheduledSessions[0].id;
        }

        function fetchCurrentSession() {
            if (!currentSessionId) { return; }
            return SessionService.getSession(currentSessionId);
        }

        function setCurrentSession(result) {
            $scope.currentSession = result.data;
        }
    }
]);
