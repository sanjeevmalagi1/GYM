(function() {
  'use strict';

  angular
    .module('app.LogsInfo')
    .controller('LogsInfoIPController', LogsInfoIPController);

  LogsInfoIPController.$inject = ['$scope','$state','$stateParams','$location','$anchorScroll','websiteService','logService','HOST'];

  function LogsInfoIPController($scope,$state,$stateParams,$location,$anchorScroll,websiteService,logService,HOST) {
    //console.log($stateParams.IP);

    if(! window.localStorage.getItem("userId")){
        $state.go('LogIn');
      }

      $scope.$watch(function () { return websiteService.getCurrentWebsite(); }, function (newValue, oldValue) {
         if (newValue !== null) {
             newValue.map(function(data){
               logService.getLogsIP(data.APIKey,$stateParams.IP)
                 .then(function(response){
                   $scope.AllLogs =  response.data;
                   $scope.Logs = $scope.AllLogs;
                   getUniqueIPs(response.data);
                 });
             });
         }
     }, true);

     $scope.setToUniques =  function(){
       $scope.Logs = $scope.uniqueURLs;
       $location.hash('Logs');
       $anchorScroll();
     }

     $scope.setToAll =  function(){
       $scope.Logs = $scope.AllLogs;
       $location.hash('Logs');
       $anchorScroll();
     }

     function getUniqueIPs(Logs){
       var uniqueURLs = [];
       $scope.uniqueURLs = Logs.filter(el => {
            if (uniqueURLs.indexOf(el.URL) === -1) {
                uniqueURLs.push(el.URL);
                return true;
            }
            return false;
        });
     }


  }

})();
