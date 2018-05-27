(function() {
  'use strict';

  angular
    .module('app.Dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope','$state','$location','footballerService','rosterService'];

  function DashboardController($scope,$state,$location,footballerService,rosterService) {
    var pageNo = $state.params.page || 1;
    
    footballerService
      .getFootballers(pageNo)
      .success(data=>{
        $scope.footballers = _.map(data.footballers,footballer=>( { ...footballer, Contract_Expiry : moment(footballer.Contract_Expiry).format('YYYY') }) );
      })
      .error(e=>{
        console.log(e);
      })

      $scope.addToRoster = function(playerId){
        if(confirm("Are you sure you want to add this player to your roster ?")){
          rosterService.addPlayer(playerId)
          .success(data=>{
            console.log(data);
          })
        }
      }
  }



})();
