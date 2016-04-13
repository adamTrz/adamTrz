(function() {
	'use strict';
  let controller = new ScrollMagic.Controller()

angular.module('app')
	.directive('navigation',function() {
    return {
      restrict:       'E',
      templateUrl:    './pages/nav.html',
      controller:     'navCtrl',
      controllerAs:   'nav'
    }
	})
  .directive('foot', function() {
    return {
      restrict:       'E',
      templateUrl:    './pages/foot.html'
    }
  })
  .directive('portfolioItem', function() {
    return {
      restrict:       'A',
      templateUrl:     './pages/portfolio-item.html',
      link: function(scope, elem, attrs) {
        var scene = new ScrollMagic.Scene({
            triggerElement: elem[0],
            offset: -200
        })
      .setClassToggle(elem[0], 'is-active')
      .addTo(controller);
      }
    }
  })

}());
