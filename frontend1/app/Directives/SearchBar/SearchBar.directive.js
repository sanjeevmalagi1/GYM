(function() {
  'use strict';

  angular
    .module('app.Directives')
    .directive('gmSearchBar', gmSearchBar);

  function gmSearchBar() {
    return {
      templateUrl: 'app/Directives/SearchBar/SearchBar.html',
      restrict: 'E',
      controller: SearchBarController,
      controllerAs: 'vm',
      bindToController: true

      };
  }

  SearchBarController.$inject = ['$scope','$location'];

  function SearchBarController($scope,$location) {
    
    $scope.searchTerm = "";

    $scope.$watch('searchTerm', function(value) {
      // window.localStorage.setItem("currentWebsite",$scope.currentWebsite);
      // websiteService.setCurrentWebsite($scope.currentWebsite);
      console.log(value);
      
   });

  //  $scope.goToWebsiteSelector = function () {
  //    $location.hash('websiteSelector');
  //    $anchorScroll();
  //  }

    
  }



})();
