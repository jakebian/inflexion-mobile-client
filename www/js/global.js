angular.module('global', [])

.constant('ApiConfig', {
    url: 'http://inflexion.jakebian.me'
})

.constant('CurrentUser', {
    id: '5503b952ebbf85a30358ba06'
})

.constant('IonicConfig', {
    pageState:
        {
            url: '/page',
            abstract: true,
            templateUrl: 'views/tabs.html'
        }
});