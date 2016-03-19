angular.module('addressBook').factory('contactsFactory', ['$http', function($http){
  var apiUrl = '/api/contacts';
  function fetch(){
    return $http.get(apiUrl).then(function (response) {
      return response.data.contacts
    });
  }
  function find(contact){
    var findUrl = apiUrl + "/" + (contact.id).toString();
    return $http.get(findUrl).then(function (response) {
      return response.data.contact
    });
  }
  return {
    fetch: fetch,
    find: find
  };
}])