(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules.
      'ui.router',
      // Custom modules.
      'app.Core',
      'app.Directives',
      'app.User',
      'app.Dashboard',
      'app.PlayerInfo',
      'app.Roster'
    ])
    .constant('HOST','http://localhost:8000/api');


})();
