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
