(function(){
  'use strict'
///////////////////////////
// APP DECLARATION AND CONFIG:
///////////////////////////

  let app =  angular.module('app', ['ngAnimate','ui.router'])

  //hack from http://stackoverflow.com/questions/17497006/use-http-inside-custom-provider-in-app-config-angular-js/21536845#21536845
  // allow to inject $http into configuration resolve function
  let initInjector = angular.injector(['ng']);
  let $http = initInjector.get('$http');

  app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state,  $stateParams) {
    // It's very handy to add references to $state and $stateParams to the $rootScope so that you can access them from any scope within your applications.For example, <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li> to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      console.log(error);
    })
  }])

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
  app.filter('noDots', function () {
    return function(str) {
      return str.slice(0,str.indexOf('.'))
    }
  })

///////////////////////////
// DIRECTIVES
///////////////////////////
  app.directive('navigation',function() {
    return {
      restrict:       'E',
      templateUrl:    './pages/nav.html',
      controller:     'navCtrl',
      controllerAs:   'nav'
    }
  })
  app.directive('foot', function() {
    return {
      restrict:       'E',
      templateUrl:    './pages/foot.html'
    }
  })
  app.directive('portfolioItem', function() {
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
///////////////////////////
// CONTROLLERS:
///////////////////////////
  let controller = new ScrollMagic.Controller()

  app.controller('aboutCtrl',['$http', function($http){
    let vm = this
    vm.who = "Adam Trzciński"
    vm.skillset = {}
    $http.get('./assets/api/skillset.json').then(function(resp) {
      console.log(resp);
      vm.skillset = resp.data
    })

    console.log(this.skillset)

  }])

  app.controller('navCtrl', function(){
    this.showMenu = 1
    this.showAnchors = (() => {
      this.showMenu = this.showMenu ? 0 : 1
    })
  })

  app.controller('portfolioCtrl', ['pictures','icons', function(pictures,icons){
    this.gallery = pictures
    // console.log(this.gallery2);
    // this.gallery = portfolioGallery
    this.icons = icons
    this.iconClass = ((task) => {
      let classObj =  this.icons.filter((obj) => {
        return obj.task === task
      })
      return classObj[0].icon
    })

  }])
  app.controller('contactCtrl', ['socialLinks', function(socialLinks){
    this.mail = {}
    this.socials = socialLinks
    this.formSubmit = ((mail,form) => {
      console.log('thanks');
      this.mail = {}
      form.$setPristine()
      console.log(form);
    }
    )
  }])

})()
