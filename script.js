(function(){
	angular.module('myApp', ['as.change'])
	  .controller('myCtrl', ['$scope', function($scope) {
		$scope.testFunc = function(value) {
		  alert("Value selected - "+value);
		};
	  }])
})();