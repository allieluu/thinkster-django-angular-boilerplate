(function () {
    'use strict';

    angular
        .module('thinkster', [
            'thinkster.config',
            'thinkster.routes',
            'thinkster.authentication'
        ]);

    angular.module('thinkster.config', []);

    angular.module('thinkster.routes', ['ngRoute']);

    angular.module('thinkster').run(run);

    run.$inject = ['$http']

    /**
     * @name run
     * @desc Update xsrf $http headers to aline with Django's defaults
     */
    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken'
        $http.defaults.xsrfCookieName = 'csrftoken'
    }
})();
