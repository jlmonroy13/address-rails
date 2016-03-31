(function () {
  'use strict';

  angular
    .module('addressBook')
    .factory('contactsFactory', contactsFactory);

    contactsFactory.$inject = ['$http'];

    function contactsFactory($http) {

      var apiUrl = '/api/contacts';

      var factory = {
        fetch: fetch,
        find: find,
        update: update,
        post: post,
        erase: erase
      };
      return factory;

      function fetch(){
        return $http.get(apiUrl)
          .then(getContactsComplete)
          .catch(getContactsFailed);
      }
      
      function find(contact){
        var findUrl = apiUrl + "/" + (contact.id).toString();
        return $http.get(findUrl).then(function (response) {
          return response.data.contact
        });
      }
      function update(contact){
        var updateUrl = apiUrl + "/" + (contact.id).toString();
        $http.put(updateUrl, contact).then(function () {});
      }
      function post(contact){
        $http.post(apiUrl, contact).then(function () {});
      }
      function erase(contact){
        var eraseUrl = apiUrl + "/" + (contact.id).toString();
        $http.delete(eraseUrl).then(function () {});
      }

  }

  function getContactsComplete(response) {
    return response.data.contacts;
  }

  function getContactsFailed(error) {
    console.log('Failed for getContacts');
  }  

})();