angular.module('global', [])

.constant('ApiConfig', {
    url: 'http://inflexion.jakebian.me'
})

.constant('CurrentUser', {
    id: '550488c4a96ba531087957e1'
})

.constant('IonicConfig', {
    pageState:
        {
            url: '/page',
            abstract: true,
            templateUrl: 'views/tabs.html'
        }
});