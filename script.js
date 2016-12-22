angular.module('myApp', ['as.select'])
  .controller('myCtrl', ['$scope', function($scope) {
    $scope.testFunc = function(value) {
      alert("Value selected - "+value);
    };
  }])
