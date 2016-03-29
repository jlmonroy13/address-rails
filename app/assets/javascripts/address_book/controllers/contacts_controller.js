angular.module('addressBook').controller("contactsController", ['contactsFactory', function(contactsFactory){

  var contactsCtrl = this;
  contactsCtrl.currentContact = null;
  contactsCtrl.newContactFavorite = true;
  this.fetchContacts = function() {
    contactsFactory.fetch().then(function(contacts){
      contactsCtrl.contacts = contacts;
    })
  }

  this.toggleFavorite = function(contact){
    contact.favorite = !contact.favorite;
    this.currentContact = contact;
    this.updateContacts();
  };

  this.assignCurrentContact = function(contact){
    contactsCtrl.newContactFavorite = false;
    contactsFactory.find(contact).then(function(currentContact){
      contactsCtrl.currentContact = currentContact;
    });
  };

  this.updateContacts = function(){
    var id = this.currentContact.id;
    var exist = false;
    angular.forEach(this.contacts, function(contact, key){
      if (contact.id == id) {
        contactsFactory.update(contactsCtrl.currentContact);
        contactsCtrl.fetchContacts();
        exist = true;
      }
    })
    if (exist == false) {
      contactsFactory.post(contactsCtrl.currentContact);
      contactsCtrl.fetchContacts();
    }
  };

  this.addNewContact = function(){
    contactsCtrl.newContactFavorite = true;
    this.currentContact = {};
  };

  this.deleteContact = function(){
    contactsFactory.erase(contactsCtrl.currentContact);
    contactsCtrl.fetchContacts();
  };

  contactsCtrl.fetchContacts();

}]);

