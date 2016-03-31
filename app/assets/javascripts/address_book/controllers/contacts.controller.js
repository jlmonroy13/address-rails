(function () {
  'use strict';

  angular
    .module('addressBook')
    .controller('AddressCtrl', AddressCtrl);

    AddressCtrl.$inject = ['contactsFactory'];

    function AddressCtrl(contactsFactory) {

      var vm = this;

      vm.modalStatus = false;
      vm.currentContact = {};     
      vm.fetchContacts = fetchContacts;
      vm.toggleFavorite = toggleFavorite;
      vm.assignCurrentContact = assignCurrentContact;
      vm.updateContacts = updateContacts;
      vm.updateContact = updateContact;
      vm.addNewContact = addNewContact;
      vm.deleteContact = deleteContact;
      vm.openModal = openModal;

      function openModal(currentContact) {
        vm.modalStatus = true;
      }

      function updateContact(currentContact){
        vm.assignCurrentContact(currentContact);
        vm.openModal();
      }

      function addNewContact() {
        vm.currentContact = {};
        vm.openModal();
      };

      function fetchContacts() {
        contactsFactory.fetch()
          .then(function(data) {
            vm.contacts = data;
        });
      }

      function toggleFavorite(contact) {
        contact.favorite = !contact.favorite;
        vm.currentContact = contact;
        vm.updateContacts(contact);
      };

      function assignCurrentContact(contact) {
        contactsFactory.find(contact).then(function(currentContact){
          vm.currentContact = currentContact;
        });      
      };

      function updateContacts(currentContact) {
        var id = currentContact.id;
        if (typeof currentContact.id != "undefined") {
          contactsFactory.update(currentContact);
          vm.fetchContacts();
        } else {
          contactsFactory.post(currentContact);
          vm.fetchContacts();
        }
      };

      function deleteContact(currentContact){
        contactsFactory.erase(currentContact);
        vm.fetchContacts();
      };

      vm.fetchContacts();

  }

})();