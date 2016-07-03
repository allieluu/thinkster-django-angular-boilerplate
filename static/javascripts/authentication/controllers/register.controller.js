/**
 * Created by allisonburton on 7/2/16.
 */

/**
 * Register controller
 * @namespace thinkster.authentication.controllers
 */
(function () {
    'use strict';

    angular.module('thinkster.authentication.controllers').controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$location', '$scope', 'Authentication'];

    /**
     * @namespace RegisterController
     */

    function RegisterController($location, $scope, Authentication) {
        var vm = this;
        vm.register = register;

        /**
         * @name register
         * @desc Register a new name
         * @memberOf thinkster.authentication.controllers.RegisterController
         */
        function register() {
            Authentication.register(vm.email, vm.password, vm.username);
        }
    }
})();