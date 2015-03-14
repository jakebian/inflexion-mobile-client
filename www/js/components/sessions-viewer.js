angular.module('component.sessions-viewer', ['component.session-summary'])

.directive('sessionsViewer', [function () {
    return {
        scope: {
            sessions: '='
        },
        templateUrl: 'views/partials/sessions-viewer.html'
    }
}]);