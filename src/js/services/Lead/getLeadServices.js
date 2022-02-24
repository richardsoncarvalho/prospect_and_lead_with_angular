angular.module('app').service('getLeadAPI', function ($http, config) {
  return {
    getLeads: function () {
      return $http.get(`${config.baseUrl}leads`);
    },
  };
});
