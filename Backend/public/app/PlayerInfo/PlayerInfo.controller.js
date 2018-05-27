(function() {
  'use strict';

  angular
    .module('app.PlayerInfo')
    .controller('PlayerInfoController', PlayerInfoController);

    PlayerInfoController.$inject = ['$scope','$state','$location','$anchorScroll','footballerService'];

  function PlayerInfoController($scope,$state,$location,$anchorScroll,footballerService) {
    
    function removeDiacritics(str) {
      return str.replace(/[^A-Za-z0-9\s]+/g, function(a){
         return ''; 
      });
   }

    footballerService
      .getFootballer($state.params.playerId)
      .success(data=>{
        var palyer = data.footballer[0];
        $scope.player = {...palyer,Contract_Expiry : moment(palyer.Contract_Expiry).format('YYYY')};
        $scope.image = `assets/Pictures/${removeDiacritics($scope.player.Name)}.png` ;
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
