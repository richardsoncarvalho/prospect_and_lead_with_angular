angular
  .module('app')
  .controller(
    'postFormController',
    function ($rootScope, $scope, getCadencesAPI, saveProspectAPI) {
      $scope.lead = {};
      $scope.cadences = [];

      const getCadences = function () {
        getCadencesAPI.getCadences().then(function ({ data }) {
          $scope.cadences = data.data;
        });
      };

      const clearForm = function () {
        $scope.lead = {};
      };

      $scope.addLead = function (lead) {
        const httpRequest = {
          ...lead,
          cadence: lead.cadence.id,
        };
        saveProspectAPI
          .saveProspect(lead.cadence, httpRequest)
          .then(function () {
            $rootScope.$broadcast('updateLead');
            clearForm();
          });
      };

      $scope.clear = function () {
        clearForm();
      };

      getCadences();
    },
  );
