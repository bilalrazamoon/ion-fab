ion-fab-button
===================

Android [floating action button](http://www.google.com/design/spec/components/buttons.html#buttons-floating-action-button) which reacts on scrolling events. Becomes visible when an attached target is scrolled up and invisible when scrolled down.

[Demo](http://codepen.io/hafizbilal112/pen/zxWJGd)

## Usage

Include `ion-fabButton.css` and `ion-fabButton.js` after the rest of your Ionic and Angular includes and add the ion-fab-button module to your configuration. Then use the following AngularJS directives:

```html
<!-- scrollable element -->
<div fab-scroll-container>
</div>
<!-- fab directive must be after scrollable element -->
<fab>
    ...
</fab>
```

## Options

disabled live displace (move) - default true - type boolean:

```html
<fab live-displace="false">
    ...
</fab>
```