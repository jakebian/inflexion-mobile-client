angular.module('component.date-display', ['filter.time'])
.directive('dateDisplay',
            ['dateModelFilter',
    function (dateModelFilter) {
        return {
            scope: {
                date: '='
            },
            restrict: 'E',
            templateUrl: 'views/partials/date-display.html',
            link: link
        }

        function link(scope) {
            scope.dateModel = dateModelFilter(scope.date);
        }

    }
])