// github link - https://github.com/NithinBiliya/angular-select

(function(){
	angular.module('as.select', [])

	.directive('asSelect', function() {
	  return {
		restrict: 'A',
		link: function link(scope, element, attrs) {
		  if(element[0].tagName== 'SELECT') {
			var clickCounter=0;
			
			element.bind("click", function(){
			  if(clickCounter==1) {
				if(attrs.asSelect=="autoFocusOff") {
				  element[0].blur();
				} else {
				  if(attrs.asSelect.split(';')[0].trim()=="autoFocusOff") {
					scope.$eval(attrs.asSelect.split(';')[1].trim());
					element[0].blur();
				  } else {
					scope.$eval(attrs.asSelect);
				  }
				}
				clickCounter=0;
			  } else {
				clickCounter++;
			  }
			});
			
			element.bind("blur", function(){
			  clickCounter=0;
			});
		  }
		}
	  };
	});
})();