(function(){
  'use strict'

  angular.module('app', ['ngAnimate','ui.router','ngTouch'])
    .run(injectRootScope)
    .config(configureRoutes)
    .filter('noDots', noDots)

  injectRootScope.$inject = ['$rootScope', '$state', '$stateParams']
  configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider']

  function injectRootScope($rootScope, $state,  $stateParams) {
    // It's very handy to add references to $state and $stateParams to the $rootScope so that you can access them from any scope within your applications.For example, <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li> to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state
    $rootScope.$stateParams = $stateParams
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      console.log(error)
    })
  }

  function configureRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/about')
    $stateProvider
      .state('about', {
        url:            '/about',
        templateUrl:    './pages/about.html',
        controller:     'aboutCtrl',
        controllerAs:   'about'
      })
      .state('contact', {
        url:            '/contact',
        templateUrl:    './pages/contact.html',
        controller:     'contactCtrl',
        controllerAs:   'contact'
      })
      .state('portfolio', {
        url:            '/portfolio',
        templateUrl:    './pages/portfolio.html',
        controller:     'portfolioCtrl',
        controllerAs:   'portfolio',
        resolve:        {
          pictures:  ['dataService', ((dataService) => {
            return dataService.getItems('./assets/api/portfolioGallery.json')
          })],
          icons: ['dataService', ((dataService) => {
            return dataService.getItems('./assets/api/icons.json')
          })]
        }
      })
  }


  function noDots() {
    return function(str) {
      return str.slice(0,str.indexOf('.'))
    }
  }


})()
