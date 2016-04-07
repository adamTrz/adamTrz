(function(){
  'use strict'
  let app =  angular.module('app', ['ngAnimate','ngRoute'])


  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/contact' , {
        templateUrl:  './pages/contact.html',
        controller:   'contactCtrl',
        controllerAs: 'contact',
      })
      .when('/portfolio' , {
        templateUrl:  './pages/portfolio.html',
        controller:   'portfolioCtrl',
        controllerAs: 'portfolio',
      })
      .when('/about' , {
        templateUrl:  './pages/about.html',
        controller:   'aboutCtrl',
        controllerAs: 'about',
      })
      .when('/' , {
        templateUrl:  './pages/about.html',
        controller:   'aboutCtrl',
        controllerAs: 'about',
      })
      .otherwise({
        templateUrl:  './pages/404.html'
      })
  }])

  app.directive('navigation',function() {
    return {
      restrict: 'E',
      templateUrl: './pages/nav.html',
      controller: 'navCtrl',
      controllerAs: 'nav'
    }
  })

  app.controller('aboutCtrl',function(){
  })
  // app.run(function() {
  //
  //   })


  app.controller('navCtrl', function(){
    this.showMenu = 0
    this.activePane = 2
    this.showAnchors = (() => {
      this.showMenu = this.showMenu ? 0 : 1
    })
    this.setActive = ((num) => {
      this.activePane = num
    })
  })

  app.controller('portfolioCtrl', function(){
    this.gallery = portfolioGallery
    this.pairs = iconPairs
    this.iconClass = ((task) => {
      let classObj =  this.pairs.filter((obj) => {
        return obj.task === task
      })
      return classObj[0].icon
    })
  })
  app.controller('contactCtrl', function(){
    this.mail = {}
    this.socials = contactList
    this.formSubmit = ((mail,form) => {
      console.log('thanks');
      this.mail = {}
      form.$setPristine()
      console.log(form);
    }
    )
  })

  const contactList = [
    { url:    'https://github.com/adamTrz',
      title:  'GitHub',
      icon:   'fa-git',
    },
    { url:    'http://codepen.io/adamTrz/',
      title:  'CodePen',
      icon:   'fa-codepen',
    },
    { url:    'https://www.linkedin.com/in/adamtrz',
      title:  'LinkedIn',
      icon:   'fa-linkedin',
    }
  ]
  const portfolioGallery = [
      { url:      'http://fillmurray.com/g/600/300',
        title:    'Portfolio - adamTrz.',
        tasks:     ['design', 'layout', 'code','animations'],
        techs:     ['Jade','Sass','Gulp','Angular','Skeleton', 'ScrollMagic'],
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { url:      './assets/img/y.jpg',
        title:     'Magic of Y - contact page for Polish acclaimed illusionist "Y".',
        tasks:     ['design', 'layout', 'code','animations'],
        techs:     ['Jade','Sass','Gulp','Gsap','jQuery'],
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { url:      './assets/img/black-bird.jpg',
        title:     'Black Bird Store - a simple paralax technique example.',
        tasks:     ['code', 'animations'],
        techs:     ['Jade','Sass','jQuery'],
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { url:      './assets/img/sentiOne.jpg',
        title:     'Responsive template for SentiOne.',
        tasks:     ['code', 'animations'],
        techs:     ['Jade','Sass','Gulp','Skeleton'],
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { url:      './assets/img/deska.png',
        title:     'Responsive template for EasySend',
        tasks:     ['code', 'animations'],
        techs:     ['Jade','Sass','Gulp','jQuery'],
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { url:      './assets/img/kafelki.jpg',
        title:     'Responsive template for Green Beam',
        tasks:     ['code', 'animations'],
        techs:     ['Jade','Sass','Gulp','Bootstrap'],
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
    ]
  const iconPairs = [
    {task:  'design',     icon: 'lightbulb_outline'},
    {task:  'layout',     icon: 'line_style'},
    {task:  'code',       icon: 'code'},
    {task:  'animations', icon: 'crop_rotate'}
  ]

//////////////////////////////////////////////////
})()

$(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();
  // get all triggers - headers of all 3 slides
  // var $headers = $('portfolio #portfolio article')
  // console.log($headers);
  // var headers = jQuery.makeArray($headers)
  var headers = ['slide01','slide02','slide03','slide04','slide05','slide06',]
  // console.log(headers);
  // SCENE 1
  // create scenes for each of the headers
  headers.forEach(function (header, index) {
    // number for highlighting scenes
    var num = index+1;
      // make scene
      var headerScene = new ScrollMagic.Scene({
          triggerElement: header,
          offset: -100
      })
      .setClassToggle('#slide0'+num, 'is-active')
      .addTo(controller);
  });
});
