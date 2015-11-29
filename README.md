&lt;ion-fab&gt;
===================

Android [floating action button](http://www.google.com/design/spec/components/buttons.html#buttons-floating-action-button) which reacts on scrolling events. Becomes visible when an attached target is scrolled up and invisible when scrolled down.

## Usage

Include `ion-fab.css` and `ion-fab.js` after the rest of your Ionic and Angular includes and add the `fabDirective` module to your configuration. Then use the following AngularJS directives:

```html
    <!-- scrollable element -->
    <div fab-scroll-container>
    </div>
    <!-- ion-fab directive must be after scrollable element -->
    <ion-fab>
        ...
    </ion-fab>
```

## Options

disabled live displace (move) - default true - type boolean:

```html
    <ion-fab live-displace="false">
        ...
    </ion-fab>
```