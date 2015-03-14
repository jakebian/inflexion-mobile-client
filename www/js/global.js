angular.module('global', [])

.constant('ApiConfig', {
    url: 'http://inflexion.jakebian.me'
})

.constant('currentUser', {
    id: '5501fa57269d43c23a28873f'
})

.constant('ionicConfig', {
    pageState:
        {
            url: '/page',
            abstract: true,
            templateUrl: 'views/tabs.html'
        }
});