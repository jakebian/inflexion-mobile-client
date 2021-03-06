angular.module('service.user', ['global'])
.service('UserService',
            ['$http','$q','ApiConfig','CurrentUser',
    function ($http , $q , ApiConfig , CurrentUser) {
        var currentUser;

        return {
            getUser: getUser,
            getCurrentUser: getCurrentUser
        }

        // returns a promise
        function getCurrentUser() {
            if (currentUser) {
                return getCurrentUserPromise();
            }

            return getUser(CurrentUser.id).then(setCurrentUser);
        }

        function setCurrentUser(result) {
            currentUser = result.data;
            return currentUser;
        }

        function getUser(id) {
            return $http.get(ApiConfig.url + '/user/' + id);
        }

        // a fake promise
        function getCurrentUserPromise() {
            var deferred = $q.defer();
            deferred.resolve(currentUser);
            return deferred.promise;
        }
    }
]);