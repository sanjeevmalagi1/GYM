(function() {
    'use strict';
  
    angular
      .module('app.Core')
      .factory('footballerService', footballerService);
  
      footballerService.$inject = ['$state','$http','HOST'];
  
    function footballerService($state,$http,HOST) {
  
      var currentWebsite = {};
  
      var service = {
        getFootballers,
        getFootballer
      };
  
      return service;
  
      ////////////
      function getFootballers(offset){
        offset = offset-1;
        return $http({
          method: 'GET',
          url: `${HOST}/Footballers`,
          params: {
              limit : 50,
              offset : offset*50
          }
        });
  
      }

      function getFootballer(playerId){
        return $http({
          method: 'GET',
          url: `${HOST}/Footballers/${playerId}`
        });
  
      }
  
    }
  
  })();
  