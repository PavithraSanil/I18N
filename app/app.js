'use strict';

angular.module('myApp', ['ngRoute', 'pascalprecht.translate'])

.config(['$routeProvider', '$translateProvider', function($routeProvider, $translateProvider) {
    $routeProvider.when('/view2', {
        templateUrl: 'details.html',
        controller: 'View2Ctrl'
    })

    $translateProvider.translations('eng', {
        news: 'News1',
        detail: 'Flipkart shows its still king of Indias online retail',

    });
    $translateProvider.translations('kannada', {
        news: 'Vaarthe1',
        detail: 'Flipkart bharathadalli online maratada raja...',

    });
    $translateProvider.preferredLanguage('eng');

}])

.controller('View2Ctrl', ['$scope', '$http', '$translate', function($scope, hp, $translate) {
    //hp.get('det.json').success(function(res) {
    //   console.log(res);
    // $scope.detail=res.det;
    //       console.log(res.det);
    
    $scope.today = new Date();
    // })

    $scope.changeLanguage = function(key) {
        console.log(key);
        $translate.use(key);
    };
}])
.controller('dateController', ['$scope', function($scope){
  $scope.dates = ["dd.MM.y", "d.MM.y", "MMMM.dd.yyyy"];
}])
