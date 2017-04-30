# angular-select-change
as-change directive for select tag

It is similar to ng-change but gets triggered even on selecting the same value from the dropdown. Also has an option to disable scroll/rollover of dropdown values on hover in IE - fix for issue - [StackOverFlow link](http://stackoverflow.com/questions/41179919/how-to-disable-rollover-scroll-on-hover-over-dropdown-in-ie)

Demo
--------
[DEMO link](https://nithinbiliya.github.io/angular-select-change/)

Installation
------------
* Install using bower
```
 bower install angular-select-change
```
* Or Install using npm
```
 npm install angular-select-change
```

Install the dependencies with -
```
 bower install
 npm install
```

Build using grunt -
```
 grunt
```

Include the angular-select-change.min.js or angular-select-change.js file that is generated in dist folder in your index file and inject the as.change angular module into your module to use the as-change directive.


Usage
------
* Use as-change attribute in select tag. Here testFunc() gets called even when user selectes the same value from the dropdown
```
 <select ng-model="secondDropDownValue" as-change="testFunc(secondDropDownValue);">
```
* Use as-change="autoFocusOff" to disble scroll/rollover of dropdown in IE. fix for issue - [StackOverFlow link](http://stackoverflow.com/questions/41179919/how-to-disable-rollover-scroll-on-hover-over-dropdown-in-ie)
```
 <select as-change="autoFocusOff">
```
* as-change with both the above options.
```
 <select ng-model="thirdDropDownValue" as-change="autoFocusOff; testFunc(thirdDropDownValue);">
```

License
--------
MIT License
