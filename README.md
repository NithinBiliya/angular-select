# angular-select
as-select directive for select tag

It is similar to ng-change but gets triggered even on selecting the same value from the dropdown. Also has an option to disable scroll/rollover of dropdown values on hover in IE - fix for issue - [StackOverFlow link](http://stackoverflow.com/questions/41179919/how-to-disable-rollover-scroll-on-hover-over-dropdown-in-ie)

Demo
--------
[DEMO link](https://nithinbiliya.github.io/angular-select/)

Usage
------
* Use as-select attribute in select tag. Here testFunc() gets called even when user selectes the same value from the dropdown
```
 <select ng-model="secondDropDownValue" as-select="testFunc(secondDropDownValue);">
```
* Use as-select="autoFocusOff" to disble scroll/rollover of dropdown in IE. fix for issue - [StackOverFlow link](http://stackoverflow.com/questions/41179919/how-to-disable-rollover-scroll-on-hover-over-dropdown-in-ie)
```
 <select as-select="autoFocusOff">
```
* as-select with both the above options.
```
 <select ng-model="thirdDropDownValue" as-select="autoFocusOff; testFunc(thirdDropDownValue);">
```

License
--------
MIT License
