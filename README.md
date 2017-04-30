# angular-select-change
as-change directive for select tag

It is similar to ng-change but gets triggered even on selecting the same value from the dropdown. Also has an option to disable scroll/rollover of dropdown values on hover in IE - fix for issue - [StackOverFlow link](http://stackoverflow.com/questions/41179919/how-to-disable-rollover-scroll-on-hover-over-dropdown-in-ie)

Demo
--------
[DEMO link](https://nithinbiliya.github.io/angular-select-change/)

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
