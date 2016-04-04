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
    { url: 'http://fillmurray.com/g/600/300',
      blob: 'bananas',
      gitLink: 'https://github.com/adamTrz',
      wwwLink: '//google.pl'},
    { url: 'http://fillmurray.com/g/300/300',
      blob: 'bananas',
      gitLink: 'https://github.com/adamTrz',
      wwwLink: '//google.pl'},
    { url: 'http://fillmurray.com/g/400/300',
      blob: 'bananas',
      gitLink: 'https://github.com/adamTrz',
      wwwLink: '//google.pl'},
    { url: 'http://fillmurray.com/g/300/300',
      blob: 'bananas',
      gitLink: 'https://github.com/adamTrz',
      wwwLink: '//google.pl'},
    { url: 'http://fillmurray.com/g/500/300',
      blob: 'bananas',
      gitLink: 'https://github.com/adamTrz',
      wwwLink: '//google.pl'}
  ]
