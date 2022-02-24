angular.module('app').service('saveProspectAPI', function ($http, config) {
  return {
    saveProspect: function (cadence, data) {
      return $http.post(
        `${config.baseUrl}prospections/cadence/${cadence.id}/lead?token=${cadence.token}`,
        data,
      );
    },
  };
});
