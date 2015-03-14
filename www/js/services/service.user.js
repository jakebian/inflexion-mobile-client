angular.module('service.user', ['global'])
.service('UserService',
            ['$http','ApiConfig',
    function ($http , ApiConfig) {
        return {
            getUser: getUser
        }

        function getUser(id) {
            return $http.get(ApiConfig.url + '/user/' + id);
        }
    }
]);