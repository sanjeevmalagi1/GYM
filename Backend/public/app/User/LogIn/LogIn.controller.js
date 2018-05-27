(function() {
  'use strict';

  angular
    .module('app.User')
    .controller('LogInController', LogInController);

  LogInController.$inject = ['$scope','$state','userService','HOST'];

  function LogInController($scope,$state,userService,HOST) {
    if(window.localStorage.getItem("userId")){
      $state.go('Dashboard');
    }

    $scope.LogIn = function(){
      userService.LogInUser($scope.email,$scope.password)
        .success(function(data){
          if(data!='null'){
            var userInfo = data;
              window.localStorage.setItem("userId",userInfo.ID);
              window.localStorage.setItem("userEmail",userInfo.Email);
              $state.go('Dashboard');
          }
        });
    }

    $scope.demoLogIn =  function(){
      userService.LogInUser("sanjeevmalagi@gmail.com","1234")
        .success(function(data){
          console.log(data);
          if(data!='null'){
            var userInfo = data;
              window.localStorage.setItem("userId",data.ID);
              window.localStorage.setItem("userEmail",data.Email);
              $state.go('Dashboard');
          }
        });
    }
  }

})();
