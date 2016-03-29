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
  return {
    fetch: fetch,
    find: find,
    update: update,
    post: post,
    erase: erase
  };
}])