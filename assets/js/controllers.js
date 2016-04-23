(function() {
	'use strict';

	angular.module('app')
		.controller('aboutCtrl', aboutCtrl)
		.controller('navCtrl', navCtrl)
		.controller('portfolioCtrl', portfolioCtrl)
		.controller('contactCtrl', contactCtrl)

		aboutCtrl.$inject = ['dataService']
		portfolioCtrl.$inject = ['pictures', 'icons']
		contactCtrl.$inject = ['dataService']

    /*jshint validthis: true */

		function aboutCtrl(dataService) {
			let vm = this
			this.who = "Adam Trzciński"
	    this.skillset = {}
			dataService.getItems('./assets/api/skillset.json')
				.then(gotSkills)
				.catch(failed)
			function gotSkills(skills) {
				vm.skillset = skills
			}
			function failed(msg) {
				console.log(msg)
			}
		}

		function navCtrl() {
	    this.showMenu = 0
	    this.showAnchors = (() => {
	      this.showMenu = this.showMenu ? 0 : 1
	    })
		}

		function portfolioCtrl(pictures,icons) {
	    this.gallery = pictures
	    this.icons = icons
	    this.iconClass = ((task) => {
	      let classObj =  this.icons.filter((obj) => {
	        return obj.task === task
	      })
	      return classObj[0].icon
	    })
		}

		function contactCtrl(dataService) {
			let vm = this
			this.mailSent = false
			this.sendError = false
	    this.mail = {}
			this.formSubmit = ((mail,form) => {
				dataService
					.sendMail(mail)
					.then(()=>{
	      		this.mail = {}
						this.mailSent = true
	      		form.$setPristine()
					})
					.catch(() => {
						this.sendError = true
					})
	    })

			dataService.getItems('./assets/api/socialLinks.json')
				.then(gotLinks)
				.catch(failed)
			function gotLinks (links) {
				vm.socials = links
			}
			function failed(msg) {
				console.log(msg)
			}
		}

}())
