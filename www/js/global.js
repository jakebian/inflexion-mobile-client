angular.module('global', [])

.constant('ApiConfig', {
    url: 'http://inflexion.jakebian.me'
})

.constant('CurrentUser', {
    id: '5501fa57269d43c23a28873f'
})

.constant('IonicConfig', {
    pageState:
        {
            url: '/page',
            abstract: true,
            templateUrl: 'views/tabs.html'
        }
});