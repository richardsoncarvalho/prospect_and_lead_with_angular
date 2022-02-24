angular.module('app').service('saveProspectAPI', function ($http, config) {
  return {
    saveProspect: function (id, data) {
      return $http.post(
        `${config.baseUrl}prospections/cadence/${id}/lead`,
        data,
      );
    },
  };
});
