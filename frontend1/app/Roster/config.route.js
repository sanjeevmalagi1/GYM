(function() {
  'use strict';

  angular
    .module('app.Roster')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider
      .state('Roster',{
        url: '/Roster',
    	  views: {
            "content": {
                templateUrl: 'app/Roster/Roster.html',
                controller : 'RosterController'
            }
        }
      })
  }

})();
