(function() {
  'use strict';

  angular
    .module('app.Dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope','$state','$location','$anchorScroll','footballerService','HOST'];

  function DashboardController($scope,$state,$location,$anchorScroll,footballerService,HOST) {
    var pageNo = $state.params.page || 1;
    
    footballerService
      .getFootballers(pageNo)
      .success(data=>{
        $scope.footballers = _.map(data.footballers,footballer=>( { ...footballer, Contract_Expiry : moment(footballer.Contract_Expiry).format('YYYY') }) );
        console.log(data);
      })
      .error(e=>{
        console.log(e);
      })
	// if(! window.localStorage.getItem("userId")){
  //     //redirect to dashboard
  //     $state.go('LogIn');
  //   }

  //   $scope.$watch(function () { return websiteService.getCurrentWebsite(); }, function (newValue, oldValue) {
  //      if (newValue !== null) {
  //         //  newValue.map(function(data){
  //         //    logService.getLogs(data.APIKey)
  //         //      .then(function(response){
  //         //        $scope.AllLogs =  response.data;
  //         //        $scope.Logs = $scope.AllLogs;
  //         //        getUniqueIPs(response.data);
  //         //      });
  //         //  });
  //      }
  //  }, true);



  }



})();
