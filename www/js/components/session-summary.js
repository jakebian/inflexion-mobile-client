angular.module('component.session-summary',
    [
        'service.session'
    ]
)

.directive('sessionSummary',
                ['SessionService',
        function (SessionService) {
            return {
                scope: {
                    session: '='
                },
                templateUrl: 'views/partials/session-summary.html',
                link: link
            }

            function link(scope) {
                SessionService.getSession(scope.session.id).success(setScopeSession);

                function setScopeSession(session) {
                    console.log(session)
                    scope.session = session;
                }
            }

        }
]);