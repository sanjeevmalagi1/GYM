(function() {
  'use strict';

  angular
    .module('app.Core')
    .factory('websiteService', websiteService);

  websiteService.$inject = ['$state','$http','utils','HOST'];

  function websiteService($state,$http,utils,HOST) {

    var currentWebsite = {};

    var service = {
      addWebsite : addWebsite,
      editWebsite : editWebsite,
      setCurrentWebsite : setCurrentWebsite,
      getCurrentWebsite: getCurrentWebsite,
      resetCurrentWebsite: resetCurrentWebsite
    };

    return service;

    ////////////
    function addWebsite(OwnerId,Name){
      return $http({
        method: 'POST',
        url: HOST+'index.php/Website/AddSite/',
        dataType: 'json',
        data: utils.urlStringConvert(
                {
                  'OwnerId' : OwnerId,
                  'Name' : Name
                }
              ),
      });

    }
    function editWebsite(WebsiteID,Name){
      return $http({
        method: 'POST',
        url: HOST+'index.php/Website/EditWebSite/',
        dataType: 'json',
        data: utils.urlStringConvert(
                {
                  'WebSiteID' : WebsiteID,
                  'NewName' : Name
                }
            ),
      });
    }

    function setCurrentWebsite(website){

      //currentWebsite = JSON.parse(website);
    }

    function getCurrentWebsite(){
       return currentWebsite;
    }

    function resetCurrentWebsite(){
      currentWebsite = NaN;
      window.localStorage.removeItem("currentWebsite");
    }

  }

})();
