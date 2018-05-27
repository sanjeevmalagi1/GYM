(function() {
  'use strict';

  angular
    .module('app.Directives')
    .directive('saWebsiteSelector', saWebsiteSelector);

  function saWebsiteSelector() {
    return {
      templateUrl: 'app/Directives/WebsiteSelector/WebsiteSelector.html',
      restrict: 'E',
      controller: WebsiteSelectorController,
      controllerAs: 'vm',
      bindToController: true

      };
  }

  WebsiteSelectorController.$inject = ['$scope','$location','$anchorScroll','websiteService','HOST'];

  function WebsiteSelectorController($scope,$location,$anchorScroll,websiteService,HOST) {
    LoadWebsites();

    $scope.currentWebsite = window.localStorage.getItem("currentWebsite");

    $scope.$watch('currentWebsite', function() {
      window.localStorage.setItem("currentWebsite",$scope.currentWebsite);
      websiteService.setCurrentWebsite($scope.currentWebsite);
   });

   $scope.goToWebsiteSelector = function () {
     $location.hash('websiteSelector');
     $anchorScroll();
   }

    function LoadWebsites(){

      $.post(
        HOST+'index.php/Website/GetWebsitesOfUser',
        {
          'UserId' : window.localStorage.getItem("userId")
        },
        function(data,status){
          if(data!='null' && status == 'success'){
            var websites = JSON.parse(data);
            $scope.websites =  websites;
            $scope.$digest();
          }
        }
      );
    }
  }



})();
