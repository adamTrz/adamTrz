(function() {
  'use strict'

  angular
    .module('app')
    .factory('dataService', dataService)

  dataService.$inject = ['$http','$q']
  /* @ngInject */
  function dataService($http, $q) {

    return {sendMail, getItems}

    function sendMail(mail) {
      return $http
				.post("https://formspree.io/trzcinski.adam@gmail.com", mail)
        .then(mailSent)
        .catch(errorSending)
    }

    function getItems(url) {
			return $http
				.get(url)
				.then(gotItem)
				.catch(errorGetingItem)
    }

    function mailSent(resp) {
      return resp
    }
    function errorSending(resp) {
      return resp
    }
    function gotItem(resp) {
      return resp.data
    }
    function errorGetingItem(resp) {
      return $q.reject(resp)
    }
  }

})()
