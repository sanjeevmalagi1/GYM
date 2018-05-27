(function() {
  'use strict';

  angular
    .module('app.WebSite')
    .controller('AddWebsiteController', AddWebsiteController);

  AddWebsiteController.$inject = ['$scope','$state','websiteService'];

  function AddWebsiteController($scope,$state,websiteService) {

    $scope.AddWebsite = function(){
      websiteService.addWebsite(window.localStorage.getItem("userId"),$scope.Name)
        .success(function(data){
          if(data!='null'){
            $scope.APIKey = data;
          }
        });
    }

    $scope.copy = function() {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", $scope.scriptCopy);
    }

  }

})();
