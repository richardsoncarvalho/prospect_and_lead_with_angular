angular.module('app').service('getCadencesAPI', function ($http, config) {
  this.getCadences = function () {
    return $http.get(`${config.baseUrl}/cadences`);
  };
});
