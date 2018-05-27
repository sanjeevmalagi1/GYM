(function() {
  'use strict';

  angular
    .module('app.LogsInfo')
    .controller('LogsInfoController', LogsInfoController);

  LogsInfoController.$inject = ['$scope','$state','$stateParams','websiteService','logService','HOST'];

  function LogsInfoController($scope,$state,$stateParams,websiteService,logService,HOST) {
    var APIKey = JSON.parse(window.localStorage.getItem("currentWebsite"))[0].APIKey;
    logService.getLogInfo(APIKey,$stateParams.ID)
      .then(function(response){
          $scope.Log =  response.data;
      });
  }

})();
