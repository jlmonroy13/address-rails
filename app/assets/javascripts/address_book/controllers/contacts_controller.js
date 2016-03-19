angular.module('addressBook').controller("contactsController", ['contactsFactory', function(contactsFactory){
  var contactsCtrl = this;
  contactsCtrl.currentContact = null;
  contactsFactory.fetch().then(function(contacts){
    contactsCtrl.contacts = contacts;
  });
  this.toggleFavorite = function(contact){
    contact.favorite = !contact.favorite;
  }
  this.currentContact = function(contact){
    contactsFactory.find(contact).then(function(currentContact){
      contactsCtrl.currentContact = currentContact;
    });
  }
  
}]);
