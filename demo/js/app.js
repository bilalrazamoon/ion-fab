angular.module('starter', ['ionic', 'fabDirective'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .controller('mainCtrl', function ($scope) {
        $scope.todos = [];
        for (var i = 0; i <= 50; i++) {
            $scope.todos.push({
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                img: 'img/ionic.png'
            })
        }
    });