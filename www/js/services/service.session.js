angular.module('service.session', ['global'])
.service('SessionService',
            ['$http','ApiConfig',
    function ($http , ApiConfig) {
        return {
            getSession: getSession
        }

        function getSession(id) {
            return $http.get(ApiConfig.url + '/session/' + id);
        }
    }
]);