(function () {
  'use strict';

  angular
    .module('addressBook')
    .directive('contactModal', contactModal);

    function contactModal() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/templates/contact_modal',
        bindToController: {
          status: '=',
          contact: '=',
          delete: '&',
          update: '&',
          toggle: '&'
        },
        controllerAs: "vm",
        controller: addressController
      }
      return directive;
    }

    function addressController(){

      var vm = this;

      vm.deleteContact = deleteContact;
      vm.updateContacts = updateContacts;
      vm.toggleFavorite = toggleFavorite;
      vm.closeModal = closeModal;

      function deleteContact() {
        vm.delete()(vm.contact);
        vm.closeModal();
      };
      
      function updateContacts() {
        vm.update()(vm.contact);
        vm.closeModal();
      };

      function toggleFavorite() {
        vm.toggle()(vm.contact);
      };

      function closeModal(){
        vm.status = false;
      }

    };

})();

