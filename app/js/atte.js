var app = angular.module('atte', ['ng', 'ngCookies', 'pascalprecht.translate']);

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

app.factory('fileDialogs', ['$q', function($q) {
  var dialogs = {};
  
  var d = document.createElement('input');
  d.type = 'file';
  d.nwsaveas = '';
  
  dialogs.saveAs = function(callback) {
    d.addEventListener('change', function() {
      d.removeEventListener('change', arguments.callee, false);
      var value = d.value;
      d.value = '';
      callback(value);
    }, false);
    d.click();
  };
  
  dialogs.open = function() {
    return confirm("Open");
  };
  
  return dialogs;  
}]);

app.controller('mainCtrl', ['$scope', 'fileDialogs', function($scope, fileDialogs){
  
  $scope.create = function() {
    
    fileDialogs.saveAs(function(filename){
      alert(filename);
    });
    
  };
  
}]);