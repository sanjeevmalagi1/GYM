(function() {
    'use strict';
  
    angular
      .module('app.Core')
      .factory('authService', authService);
  
      authService.$inject = ['$state','$http','utils','HOST'];
  
    function authService($state,$http,utils,HOST) {
  
      var service = {
        login,
        signup,
        getToken,
        setToken,
        logout
      };
  
      return service;
  
      ////////////
      function login(username,password){
        
        return $http({
          method: 'POST',
          url: `${HOST}/User/login`,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          dataType: 'json',
          data: utils.urlStringConvert(
            {
              username,
              password
            }
          )
        });
  
      }

      function signup(username,password){
        
        return $http({
            method: 'POST',
            url: `${HOST}/User/signup`,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            dataType: 'json',
            data: utils.urlStringConvert(
              {
                username,
                password
              }
            )
          });
    }
    
    function getToken(){
        return window.localStorage.getItem('token') || null;
    }

    function setToken(token){
        return window.localStorage.setItem('token',token);
    }

    function logout(){
        return localStorage.clear();
    }
  
  }
  
  })();
  