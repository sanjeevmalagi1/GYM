(function() {
  'use strict';

  angular
    .module('app.User')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$scope','$state','$http','userService','HOST'];

  function RegisterController($scope,$state,$http,userService,HOST) {

    if(window.localStorage.getItem("userId")){
      //redirect to dashboard
      $state.go('Dashboard');
    }


    $scope.Register = function(){
      userService.Register($scope.email,$scope.password)
        .success(function(data){
          if(data!='null'){
            window.localStorage.setItem("userId",data.ID);
            window.localStorage.setItem("userEmail",data.Email);
            $state.go('Dashboard');
          }
        });
        
    }
  }

})();
