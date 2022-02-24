angular.module('app').config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'getLeadController',
      templateUrl: 'src/template/lead_list_screen.html',
    });

    $routeProvider.when('/edit/lead', {
      controller: 'editLeadController',
      templateUrl: 'src/template/edit_list_screen.html',
    });
  },
]);
