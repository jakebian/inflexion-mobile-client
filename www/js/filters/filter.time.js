angular.module('filter.time', [])

.filter('fromNow',[
    function () {
        console.log(moment)
        return function (time) {
            return moment(time).fromNow();
        }
    }
]);