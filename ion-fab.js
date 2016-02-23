angular.module('fabDirective', [])
    .directive('fabScrollContainer', function () {
        return {
            restrict: 'A',
            controller: ['$element', function ($element) {
                $element.parent().data('fabScrollContainer', $element);
            }]
        };
    })
    .directive('ionFab', function fabButtonDirective($ionicScrollDelegate) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template,
            link: link
        };

        //isAnchor
        function isAnchor(attr) {
            return angular.isDefined(attr.href) || angular.isDefined(attr.ngHref) || angular.isDefined(attr.uiSref);
        }

        //template
        function template(element, attr) {
            return isAnchor(attr) ?
                '<a class="fab" ng-transclude></a>' :
                '<button class="fab" ng-transclude></button>';
        }

        //link
        function link(scope, element, attr) {
            var liveDisplace = (attr.liveDisplace && attr.liveDisplace != 'false') || (!attr.liveDisplace && !attr.animation);
            var targetEl = element.inheritedData('fabScrollContainer') || window;
            element.addClass('animated');
            var scroll = 0, max = 80, current = 0, prevScroll = 0;
            targetEl.bind('scroll', function (e) {
                scroll = $ionicScrollDelegate.getScrollPosition().top;
                if (liveDisplace) {
                    current = scroll >= 0 ? Math.min(max, Math.max(0, current + scroll - prevScroll)) : 0;
                    window.requestAnimationFrame(function () {
                        element.css("transform", "translate3d(0, " + current + "px, 0)");
                    });
                }
                else {
                    if (current < scroll) {
                        current = scroll;
                        if (attr.animation == 'zoom')
                            element.removeClass('zoomIn').addClass('zoomOut');
                        else if (attr.animation == 'rotate')
                            element.removeClass('rotateIn').addClass('rotateOut');
                        else
                            element.removeClass('fadeInUp').addClass('fadeOutDown');
                    }
                    if (current > scroll) {
                        current = scroll;
                        if (attr.animation == 'zoom')
                            element.removeClass('zoomOut').addClass('zoomIn');
                        else if (attr.animation == 'rotate')
                            element.removeClass('rotateOut').addClass('rotateIn');
                        else
                            element.removeClass('fadeOutDown').addClass('fadeInUp');
                    }
                }
                prevScroll = scroll;
            });
        }
    });
