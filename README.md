ion-fab-button
===================

Android [floating action button](http://www.google.com/design/spec/components/buttons.html#buttons-floating-action-button) which reacts on scrolling events. Becomes visible when an attached target is scrolled up and invisible when scrolled down.

[Demo](http://codepen.io/hafizbilal112/pen/zxWJGd)

## Usage

Include `ion-fabButton.css` and `ion-fabButton.js` after the rest of your Ionic and Angular includes. Then use the following AngularJS directives:

```html
<fab-button target-id="scrollFabButtonTarget">
    <i class="icon ion ion-android-add"></i>
</fab-button>
<ion-content has-bouncing="false" id="scrollFabButtonTarget">
  ...
</ion-content>
```

###Note
Values in fab-button attr="target-id" and ion-content attr="id" should be same.
Attribute "has-bouncing" is required.
