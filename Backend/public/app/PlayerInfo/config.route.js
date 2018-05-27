(function() {
  'use strict';

  angular
    .module('app.PlayerInfo')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider
      .state('PlayerInfo',{
        url: '/PlayerInfo/:playerId',
    	  views: {
            "content": {
                templateUrl: 'app/PlayerInfo/PlayerInfo.html',
                controller : 'PlayerInfoController'
            }
        }
      })
  }

})();
