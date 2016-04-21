(function() {
	'use strict';

	angular.module('app')
		.controller('aboutCtrl',['$http', function($http){
	    this.who = "Adam Trzciński"
	    this.skillset = {}
	    $http.get('./assets/api/skillset.json')
				.then((resp) => {
	      	this.skillset = resp.data
	    })
	  }])

		.controller('navCtrl', function(){
	    this.showMenu = 0
	    this.showAnchors = (() => {
	      this.showMenu = this.showMenu ? 0 : 1
	    })
	  })

		.controller('portfolioCtrl', ['pictures','icons', function(pictures,icons){
	    this.gallery = pictures
	    this.icons = icons
	    this.iconClass = ((task) => {
	      let classObj =  this.icons.filter((obj) => {
	        return obj.task === task
	      })
	      return classObj[0].icon
	    })
	  }])

		.controller('contactCtrl', ['socialLinks', function(socialLinks){
			this.mailSent = false
	    this.mail = {}
	    this.socials = socialLinks
	    this.formSubmit = ((mail,form) => {
	      this.mail = {}
	      form.$setPristine()
				this.mailSent = true
	    })
	  }])

}());
