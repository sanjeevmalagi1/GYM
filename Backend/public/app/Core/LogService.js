(function() {
  'use strict';

  angular
    .module('app.Core')
    .factory('logService', logService);

  logService.$inject = ['$state','$http','utils','HOST'];


  function logService($state,$http,utils,HOST) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    var service = {
      getLogs : getLogs,
      getLogInfo : getLogInfo,
      getLogsIP : getLogsIP,
      getLogsURL : getLogsURL
    };

    return service;

    ////////////

    function getLogs(APIKey){
      return $http({
        method: 'POST',
        url: HOST+'index.php/Logger/GetLogs',
        dataType: 'json',
        data: utils.urlStringConvert(
                {
                  'key' : APIKey
                }
              ),
      });

    }

    function getLogInfo(APIKey,ID){
      return $http({
        method: 'POST',
        url: HOST+'index.php/Logger/GetLog',
        dataType: 'json',
        data: utils.urlStringConvert(
                {
                  'key' : APIKey,
                  'ID' : ID
                }
              ),
      });
    }

    function getLogsIP(APIKey,IP){
      return $http({
        method: 'POST',
        url: HOST+'index.php/Logger/GetLogs',
        dataType: 'json',
        data: utils.urlStringConvert(
                {
                  'key' : APIKey,
                  'IP' : IP
                }
              ),
      }).success( function(response) {
        return response;
      });
    }

    function getLogsURL(APIKey,URL){
      return $http({
        method: 'POST',
        url: HOST+'index.php/Logger/GetLogs',
        dataType: 'json',
        data: utils.urlStringConvert(
                {
                  'key' : APIKey,
                  'URL' : URL
                }
              ),
      });
    }

  }

})();
