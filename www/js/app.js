// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js


angular.module('inflexion',
    [
        'ionic',
        'starter.controllers',
        'starter.services'
    ])

.run(['$ionicPlatform', function($ionicPlatform) {
    $ionicPlatform.ready(initIonic);
}])

.config([
            '$stateProvider','$urlRouterProvider',
    function($stateProvider , $urlRouterProvider) {

        // ui-router
        $stateProvider

        // setup an abstract state for the tabs directive
        .state('page', {
            url: '/page',
            abstract: true,
            templateUrl: 'views/tabs.html'
        })

        // Each tab has its own nav history stack:

        .state('page.overview', getPageState('overview'))

        .state('page.activity', getPageState('activity'))

        .state('page.progress', getPageState('progress'))

        .state('page.stats', getPageState('stats'))
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/page/overview');
}]);

function getPageState(pageName) {
    var state = {
        url: '/' + pageName,
        views: {}
    }
    state.views[getPageViewName(pageName)] = getPageViewConfig(pageName);

    return state;
}

function getPageViewName(pageName) {
    return 'page.' + pageName;
}

function getPageViewConfig(pageName) {
    return  {
                templateUrl: getPageTemplateUrl(pageName)
            };
}

function getPageTemplateUrl(pageName) {
    return 'views/pages/'+ pageName + '.html';
}

function initIonic() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
    }
}
