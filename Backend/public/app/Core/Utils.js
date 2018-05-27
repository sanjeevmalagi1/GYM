(function() {
  'use strict';

  angular
    .module('app.Core')
    .factory('utils', utils);

  utils.$inject = [];

  function utils() {

    var service = {
      urlStringConvert : urlStringConvert
    };

    return service;

    ////////////

    function urlStringConvert(obj){
      var str = "";
      for (var key in obj) {
          if (str != "") {
              str += "&";
          }
          str += key + "=" + encodeURIComponent(obj[key]);
      }
      return str;
    }

  }

})();
