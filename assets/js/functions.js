var app = angular.module('app', [])

app.controller('mainCtrl',function () {
  this.activeSection = 1
  this.setSection = ((section)=>{
    this.activeSection = section
  })
  this.sectionSelected = ((section) => {
    return this.activeSection === section
  })
})

app.controller('navCtrl', function(){
  this.showMenu = 0
  this.showAnchors = (() => {
    this.showMenu = this.showMenu ? 0 : 1
  })
})

app.controller('portfolioCtrl', function(){
  this.gallery = portfolioGallery
})

app.controller('contactCtrl', function(){
  this.mail = {}
  this.formSubmit = ((mail,form) => {
    console.log('thanks');
    this.mail = {}
    form.$setPristine()
    console.log(form);
  }
  )
})

let portfolioGallery = [
    { size: 'thin',
      url: 'http://fillmurray.com/g/600/600',
      blob: 'bananas',
      gitLink: 'https://github.com/adamTrz',
      wwwLink: '//google.pl'},
    { size: 'wide',
      url: 'http://fillmurray.com/g/800/1200',
      blob: 'bananas',
      gitLink: 'https://github.com/adamTrz',
      wwwLink: '//google.pl'},
    { size: 'wide',
      url: 'http://fillmurray.com/g/800/800',
      blob: 'bananas',
      gitLink: 'https://github.com/adamTrz',
      wwwLink: '//google.pl'},
    { size: 'thin',
      url: 'http://fillmurray.com/g/1000/800',
      blob: 'bananas',
      gitLink: 'https://github.com/adamTrz',
      wwwLink: '//google.pl'},
    { size: 'thin',
      url: 'http://fillmurray.com/g/1200/1000',
      blob: 'bananas',
      gitLink: 'https://github.com/adamTrz',
      wwwLink: '//google.pl'}
  ]
