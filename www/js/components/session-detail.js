angular.module('component.session-detail',
    [
        'service.session'
    ]
)

.directive('sessionDetail',[
        function () {
            return {
                scope: {
                    session: '='
                },
                templateUrl: 'views/partials/session-detail.html',
                link: link
            }

            function link(scope) {

            }

        }
]);