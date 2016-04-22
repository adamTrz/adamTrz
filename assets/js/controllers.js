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

		.controller('contactCtrl', ['socialLinks','$http', function(socialLinks, $http){
			this.mailSent = false
			this.sendError = false
	    this.mail = {}
	    this.socials = socialLinks
	    this.formSubmit = ((mail,form) => {
				this.sendForm(mail)
	      form.$setPristine()
	    })
			this.sendForm = ((mail) => {
				$http
					.post("https://formspree.io/trzcinski.adam@gmail.com", mail)
					.then(() => {
	      		this.mail = {}
						this.mailSent = true
					})
					.catch(() => {
						this.sendError = true
					})
			})

	  }])

}());
