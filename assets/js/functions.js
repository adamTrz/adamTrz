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
    this.pairs = iconPairs
    this.iconClass = ((task) => {
      let classObj =  this.pairs.filter(function(obj) {
        return obj.task === task
      })
      return classObj[0].icon
    })
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
      { url:      'http://fillmurray.com/g/600/300',
        title:    'Portfolio - adamTrz.',
        tasks:     ['design', 'layout', 'code','animations'],
        techs:     ['jade','sass','gulp','angular','skeleton'],
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { url:      './assets/img/y.jpg',
        title:     'Magic of Y - contact page for Polish acclaimed illusionist "Y".',
        tasks:     ['design', 'layout', 'code','animations'],
        techs:     ['jade','sass','gulp','gsap','jquery'],
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { url:      './assets/img/black-bird.jpg',
        title:     'Black Bird Store - a simple paralax technique example.',
        tasks:     ['code', 'animations'],
        techs:     ['jade','sass','jquery'],
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { url:      './assets/img/sentiOne.jpg',
        title:     'Responsive template for SentiOne.',
        tasks:     ['code', 'animations'],
        techs:     ['jade','sass','gulp','skeleton'],
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { url:      './assets/img/deska.png',
        title:     'Responsive template for EasySend',
        tasks:     ['code', 'animations'],
        techs:     ['jade','sass','gulp','jquery'],
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
      { url:      './assets/img/kafelki.jpg',
        title:     'Responsive template for Green Beam',
        tasks:     ['code', 'animations'],
        techs:     ['jade','sass','gulp','bootstrap'],
        gitLink:  'https://github.com/adamTrz',
        wwwLink:  '//google.pl'},
    ]
let iconPairs = [
  {task:  'design',     icon: 'lightbulb_outline'},
  {task:  'layout',     icon: 'line_style'},
  {task:  'code',       icon: 'code'},
  {task:  'animations', icon: 'crop_rotate'}
]
})()
