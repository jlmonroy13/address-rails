angular.module('addressBook').controller("contactsController", ['contactsFactory', function(contactsFactory){
  var contactsCtrl = this;
  contactsCtrl.currentContact = null;
  this.fetchContacts = function() {
    contactsFactory.fetch().then(function(contacts){
      contactsCtrl.contacts = contacts;
    })
  }
  this.toggleFavorite = function(contact){
    contact.favorite = !contact.favorite;
  }
  this.assignCurrentContact = function(contact){
    contactsFactory.find(contact).then(function(currentContact){
      contactsCtrl.currentContact = currentContact;
    });
  }
  this.updateContacts = function(){
    var id = this.currentContact.id;
    var exist = false;
    angular.forEach(this.contacts, function(contact, key){
      if (contact.id == id) {
        contactsCtrl.contacts[key] = contactsCtrl.currentContact;
        contactsFactory.update(contactsCtrl.currentContact);
        exist = true;
      }
    })
    if (exist == false) {
      var newContact = contactsCtrl.currentContact;
      contactsCtrl.contacts.push(newContact);
      contactsFactory.post(contactsCtrl.currentContact);
      contactsCtrl.fetchContacts();
    }
  }
  this.addNewContact = function(){
    this.currentContact = {
      id: "",
      first_name: "",
      last_name: "",
      twitter: "",
      skype: "",
      email: "example@email.com",
      phone: "",
      address: "",
      notes: "",
      favorite: false,
      image_url: "",
      status: "active"
    };
  }
  contactsCtrl.fetchContacts();
}]);

