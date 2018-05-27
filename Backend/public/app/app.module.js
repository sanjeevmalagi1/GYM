(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules.
      //'ngRoute',
      'ui.router',
      //'ui.bootstrap',
      // Custom modules.
      'app.Core',
      'app.Directives',
      'app.User',
      'app.Dashboard',
      'app.WebSite',
      'app.LogsInfo',
      'app.PlayerInfo'
      ])
    .constant('HOST','https://assignment1234.herokuapp.com/api');


})();
