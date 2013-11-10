var app = angular.module('atte', ['ng', 'ngCookies', 'pascalprecht.translate', 'atte.utils', 'DWand.nw-fileDialog']);

// Enable translations
app.config(['$translateProvider', function($translate) {
  $translate.useStaticFilesLoader({
    prefix : 'l10n/',
    suffix : '.json'
  });
  $translate.useLocalStorage();
  $translate.preferredLanguage('en');
}]);

// Enable routing
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/main', { 
      templateUrl: 'view/main.htm',
      controller: 'mainCtrl'
    })
    .otherwise({redirectTo: '/main'});
}]);

app.controller('mainCtrl', ['$scope', 'fileDialog', function($scope, fileDialog){
  
  $scope.create = function() {
  
    fileDialog.saveAs(function(filename){
      alert("Save as: " + filename);
    });
    
  };
  
  $scope.open = function() {
  
    fileDialog.openFile(function(filename){
      alert("Open : " + filename);
    });
    
  };
  
}]);