(function () {
  'use strict';

  angular
    .module('addressBook')
    .directive('contactRow', contactRow);

    function contactRow() {
      var directive = {
        restrict: 'A',
        templateUrl: 'app/templates/contact',
        bindToController: {
          contact: '=',
          edit: '&',
          toggle: '&'
        },
        controllerAs: "vm",
        controller: contactController
      }
      return directive;
    }

    function contactController(){

      var vm = this;

      vm.updateContact = updateContact;
      vm.toggleFavorite = toggleFavorite;

      function editContact() {
        vm.update()(vm.contact);
      };

      function toggleFavorite() {
        vm.toggle()(vm.contact);
      };

    };

})();

