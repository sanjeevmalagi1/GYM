(function() {
    'use strict';
  
    angular
      .module('app.Core')
      .factory('rosterService', rosterService);
  
      rosterService.$inject = ['$state','$http','authService','utils','HOST'];
  
    function rosterService($state,$http,authService,utils,HOST) {
  
      var currentWebsite = {};
  
      var service = {
        getRoster,  
        addPlayer,
        removePlayer
      };
  
      return service;
  
      ////////////
      function getRoster(){
        return $http({
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token' : authService.getToken()
          },  
          method: 'GET',
          url: `${HOST}/Roster`
        });
  
      }

      function addPlayer(playerId){
        return $http({
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token' : authService.getToken()
          },
          url: `${HOST}/Roster`,
          dataType: 'json',
          data: utils.urlStringConvert(
            {
                playerId
            }
          )
        });
  
      }

      function removePlayer(playerId){
        return $http({
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'token' : authService.getToken()
            },
            url: `${HOST}/Roster`,
            dataType: 'json',
            data: utils.urlStringConvert(
              {
                  playerId
              }
            )
          });
  
      }
  
    }
  
  })();
  