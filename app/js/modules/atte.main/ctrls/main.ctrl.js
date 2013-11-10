angular.module('atte.main')
.controller('mainCtrl', ['$scope', 'fileDialog', function($scope, fileDialog) {
  
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