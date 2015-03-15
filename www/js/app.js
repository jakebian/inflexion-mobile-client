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
                '$stateProvider','$urlRouterProvider','IonicConfig',
        function($stateProvider , $urlRouterProvider , IonicConfig) {

            // routes
            $stateProvider
                .state('page', IonicConfig.pageState)
                .state('page.overview', getPageState('overview'))
                .state('page.activity', getPageState('activity'))
                .state('page.progress', getPageState('progress'))
                .state('page.stats', getPageState('stats'))
                .state('page.a', {
                    url: '/sessions/:sessionId',
                    views:{
                        'page.stats': {
                            templateUrl: getPageTemplateUrl('stats')
                        }
                    }
                });

            // default route
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
        return 'views/pages/'+ pageName + '/' + pageName + '.html';
    }

})();
