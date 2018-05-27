(function() {
  'use strict';

  angular
    .module('app.User')
    .controller('LogInController', LogInController);

  LogInController.$inject = ['$scope','$state','authService'];

  function LogInController($scope,$state,authService) {
    if(authService.getToken()){
      $state.go('Dashboard');
    }

    $scope.LogIn = function(){
      authService.login($scope.username,$scope.password)
        .success(data=>{
            console.log(data);
            authService.setToken(data.token);
            $state.go('Dashboard')
        })
        .error(e=>{
          console.log(e);
        })
    }

}

})();
