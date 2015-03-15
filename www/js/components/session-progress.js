angular.module('component.session-progress',
    [
        'service.session'
    ]
)

.directive('sessionProgress',[
        function () {
            return {
                scope: {
                    session: '='
                },
                templateUrl: 'views/partials/session-progress.html',
                link: link
            }

            function link(scope) {

            }

        }
]);