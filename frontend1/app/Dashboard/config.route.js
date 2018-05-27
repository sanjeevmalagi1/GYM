(function() {
  'use strict';

  angular
    .module('app.Dashboard')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider
      .state('Dashboard',{
        url: '?page',
    	  views: {
            "content": {
                templateUrl: 'app/Dashboard/Dashboard.html',
                controller : 'DashboardController'
            }
        }
      })
  }

})();
