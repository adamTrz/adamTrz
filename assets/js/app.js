(function(){
  'use strict'
///////////////////////////
// APP DECLARATION AND CONFIG:
///////////////////////////

angular.module('app', ['ngAnimate','ui.router','ngTouch'])

  //hack from http://stackoverflow.com/questions/17497006/use-http-inside-custom-provider-in-app-config-angular-js/21536845#21536845
  // allow to inject $http into configuration resolve function
  let initInjector = angular.injector(['ng']);
  let $http = initInjector.get('$http');

angular.module('app')
  .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state,  $stateParams) {
    // It's very handy to add references to $state and $stateParams to the $rootScope so that you can access them from any scope within your applications.For example, <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li> to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      console.log(error);
    })
  }])

angular.module('app')
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
        controllerAs:   'contact',
        resolve:        {
          socialLinks:  ['$http', (($htpp) => {
            return $http.get('./assets/api/socialLinks.json')
              .then(function(response) {
                return response.data})
          })]
        }
      })
      .state('portfolio', {
        url:            '/portfolio',
        templateUrl:    './pages/portfolio.html',
        controller:     'portfolioCtrl',
        controllerAs:   'portfolio',
        resolve:        {
          pictures:  ['$http', (($htpp) => {
            return $http.get('./assets/api/portfolioGallery.json')
              .then(function(response) {
                return response.data})
          })],
          icons:  ['$http', (($htpp) => {
            return $http.get('./assets/api/icons.json')
              .then(function(response) {
                return response.data})
          })]
        }
      })
  }])

angular.module('app')
  .filter('noDots', function () {
    return function(str) {
      return str.slice(0,str.indexOf('.'))
    }
  })

})()
