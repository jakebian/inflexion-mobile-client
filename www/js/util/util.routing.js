angular.module('util.routing', [])
.service('RoutingUtil', function () {
    return {
        getPageState: getPageState,
    }

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
});
