(function(){
  angular.module('app', ['ngAnimate'])

  .controller('mainCtrl',function () {
    this.activeSection = 1
    this.setSection = ((section) => {
      this.activeSection = section
    })
    this.sectionSelected = ((section) => {
      return this.activeSection === section
    })
  })

  .controller('navCtrl', function(){
    this.showMenu = 0
    // this.fun(){}
    this.showAnchors = (() => {
      this.showMenu = this.showMenu ? 0 : 1
    })
  })

  .controller('portfolioCtrl', function(){
    this.gallery = portfolioGallery
  })

  .controller('contactCtrl', function(){
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


  let contactList = [
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

  let portfolioGallery = [
      { size:     'four',
        url:      'http://fillmurray.com/g/600/600',
        blob:     'Portfolio - adamTrz',
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { size:     'eight',
        url:      './assets/img/y.jpg',
        blob:     'Magic of Y',
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { size:     'twelve',
        url:      './assets/img/black-bird.jpg',
        blob:     'Black Bird Store',
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { size:     'twelve',
        url:      './assets/img/sentiOne.jpg',
        blob:     'Template for SentiOne',
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { size:     'six',
        url:      './assets/img/deska.png',
        blob:     'Template for EasySend',
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { size:     'six',
        url:      './assets/img/kafelki.jpg',
        blob:     'Template for Green Beam',
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
    ]

})()
