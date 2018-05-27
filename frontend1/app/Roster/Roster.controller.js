(function() {
  'use strict';

  angular
    .module('app.Roster')
    .controller('RosterController', RosterController);

    RosterController.$inject = ['$scope','$state','$location','rosterService','authService'];

  function RosterController($scope,$state,$location,rosterService,authService) {

    if(!authService.getToken()){
      $state.go('Dashboard');
    }
    
    rosterService
      .getRoster()
      .success(data=>{
        console.log(data);
        handleResopnse(data)
      })
      .error(e=>{
        console.log(e);
      })
    
    $scope.deletePlayer = function(playerId){

      if(confirm("Are you sure you want to delete this player ?")){
        rosterService
          .removePlayer(playerId)
          .success(data=>{
            console.log(data);
            handleDeleteResponse(data)
          })
          .error(e=>{
            console.log(e);
          })
      }
      
    }  

    function handleDeleteResponse(data){
      const players = data.roster.players;
      $scope.footballers = _.map(players,footballer=>( { ...footballer, Contract_Expiry : moment(footballer.Contract_Expiry).format('YYYY') }) );
    }

    function handleResopnse(data){
      const players = data.roster[0].players;
      $scope.footballers = _.map(players,footballer=>( { ...footballer, Contract_Expiry : moment(footballer.Contract_Expiry).format('YYYY') }) );
    }
  }
})();
