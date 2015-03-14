angular.module('component.session-summary', [])

.directive('sessionSummary', [function () {
    return {
        scope: {
            session: '='
        },
        templateUrl: 'views/partials/session-summary.html'
    }
}]);