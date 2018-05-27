(function() {
  'use strict';

  angular
    .module('app.Core')
    .factory('userService', userService);

  userService.$inject = ['$state','$http','utils','HOST'];

  function userService($state,$http,utils,HOST) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    var service = {
      LogInUser : LogInUser,
      Register : Register
    };

    return service;

    ////////////

    function LogInUser(email,password){
      return $http({
        method: 'POST',
        url: HOST+'index.php/User/LogIn/',
        dataType: 'json',
        data: utils.urlStringConvert(
                {
                  'Email' : email,
                  'Password' : password
                }
              ),
      });
    }

    function Register(email,password){
      return $http({
        method: 'POST',
        url: HOST+'index.php/User/AddUser/',
        dataType: 'json',
        data: utils.urlStringConvert(
                {
                  'Email' : email,
                  'Password' : password
                }
              ),
      })
    }

  }

})();
