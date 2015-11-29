angular.module('fabDirective', [])
    .directive('fabScrollContainer', function () {
        return {
            restrict: 'A',
            controller: ['$element', function ($element) {
                $element.parent().data('fabScrollContainer', $element);
            }]
        };
    })
    .directive('ionFab', function fabButtonDirective() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {'liveDisplace': '='},
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
            var liveDisplace = scope.liveDisplace === false ? scope.liveDisplace : true;
            var targetEl = element.inheritedData('fabScrollContainer') || window;
            element.addClass('animated');
            var scroll = 0, max = 80, current = 0, prevScroll = 0;
            targetEl.bind('scroll', function (e) {
                scroll = window.ionic ? e.detail.scrollTop : e.target.scrollTop;
                if (liveDisplace) {
                    current = scroll >= 0 ? Math.min(max, Math.max(0, current + scroll - prevScroll)) : 0;
                    window.requestAnimationFrame(function () {
                        element.css("transform", "translate3d(0, " + current + "px, 0)");
                    });
                }
                else {
                    if (current < scroll) {
                        current = scroll;
                        element.removeClass('fadeInUp').addClass('fadeOutDown');
                    }
                    if (current > scroll) {
                        current = scroll;
                        element.removeClass('fadeOutDown').addClass('fadeInUp');
                    }
                }
                prevScroll = scroll;
            });
        }
    });
