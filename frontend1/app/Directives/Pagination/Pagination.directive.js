(function() {
  'use strict';

  angular
    .module('app.Directives')
    .directive('gmPagination', gmPagination);

  function gmPagination() {
    return {
      templateUrl: 'app/Directives/Pagination/Pagination.html',
      restrict: 'E',
      controller: PaginationController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        totalentries : "=",
        limit : "="
      }
    };
  }

  PaginationController.$inject = ['$scope','$state'];

  function PaginationController($scope,$state) {
    $scope.pageNo = parseInt($state.params.page || 1);
    $scope.pages = new Array(this.totalentries/this.limit)
    console.log($scope.pageNo,$scope.pages);
    
  }



})();
