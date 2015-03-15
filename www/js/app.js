(function () {

    angular.module('inflexion',
        [
            'libs',
            'global',
            'util',
            'filters',
            'pages',
            'components'
        ]
    )

    // init ionic
    .run([
                '$ionicPlatform','IonicUtil',
        function($ionicPlatform , IonicUtil) {
            $ionicPlatform.ready(IonicUtil.initIonic);
        }
    ])


    .config([
                '$stateProvider','$urlRouterProvider','IonicConfig','$ionicConfigProvider',
        function($stateProvider , $urlRouterProvider , IonicConfig , $ionicConfigProvider) {
            $ionicConfigProvider.tabs.position('bottom');
            // routes
            $stateProvider
                .state('page', IonicConfig.pageState)
                .state('page.overview', getPageState('overview'))
                .state('page.activity', getPageState('activity'))
                .state('page.progress', getPageState('progress'))
                .state('page.stats', getPageState('stats'))

                .state('session', {
                    url: '/sessions/:sessionId',
                    templateUrl: getPageTemplateUrl('stats')
                })
                .state('welcome', {
                    url: '/welcome',
                    templateUrl: 'views/pages/welcome/welcome.html'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'views/pages/login/login.html'
                });

            // default route
            $urlRouterProvider.otherwise('/welcome');
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
        return 'views/pages/'+ pageName + '/' + pageName + '.html';
    }

})();
