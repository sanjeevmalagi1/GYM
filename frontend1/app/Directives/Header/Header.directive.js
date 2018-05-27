(function() {
  'use strict';

  angular
    .module('app.Directives')
    .directive('saHeader', saHeader);

  function saHeader() {
    return {
      templateUrl: 'app/Directives/Header/Header.html',
      restrict: 'E',
      controller: HeaderController,
      controllerAs: 'vm',
      bindToController: true
      };
  }

  HeaderController.$inject = ['$scope', '$state','authService'];

function HeaderController($scope, $state,authService) {

    $scope.isLoggedIn = authService.getToken();
    $scope.logout = function(){
      $scope.isCollapsed = false;
      authService.logout();
      $state.go('LogIn');
    }


}



})();
