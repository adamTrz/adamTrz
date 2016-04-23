(function() {
	'use strict';
  let controller = new ScrollMagic.Controller()

angular.module('app')
	.directive('navigation', navDirective)
	.directive('foot', footDirective)
  .directive('portfolioItem', portfolioItemDirective)

function navDirective() {
  return {
    restrict:       'E',
    templateUrl:    './pages/nav.html',
    controller:     'navCtrl',
    controllerAs:   'nav'
  }
}

function footDirective() {
  return {
    restrict:       'E',
    templateUrl:    './pages/foot.html'
  }
}

function portfolioItemDirective() {
  return {
    restrict:       'A',
    templateUrl:     './pages/portfolio-item.html',
    link: function(scope, elem, attrs) {
      let scene = new ScrollMagic.Scene({
      	triggerElement: elem[0],
      	offset: -200
    	})
  		.setClassToggle(elem[0], 'is-active')
    	.addTo(controller);
    }
  }
}

}())
