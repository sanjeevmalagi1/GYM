(function() {
  'use strict';

  angular
    .module('app.User')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$scope','$state','$http','authService'];

  function RegisterController($scope,$state,$http,authService) {
    if(authService.getToken()){
      $state.go('Dashboard');
    }

    $scope.Register = function(){
      authService.signup($scope.username,$scope.password)
        .success(function(data){
          authService.setToken(data.token);
          console.log(data);
          $state.go('Dashboard');
        })
        .error(function(e){
          alert("Username already exists.Try another");
          console.log(e);
        });
        
    }
  }

})();
