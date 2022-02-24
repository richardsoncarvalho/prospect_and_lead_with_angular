angular
  .module('app')
  .controller(
    'mainController',
    function ($scope, getCadencesAPI, saveProspectAPI, getLeadAPI) {
      $scope.lead = {};
      $scope.leads = [];
      $scope.cadences = [];

      const getCadences = function () {
        getCadencesAPI.getCadences().then(function ({ data }) {
          $scope.cadences = data.data;
        });
      };

      const getLeads = function () {
        getLeadAPI.getLeads().then(function ({ data }) {
          $scope.leads = data.data;
        });
      };

      const clearForm = function () {
        $scope.lead = {};
      };

      $scope.addLead = function (lead) {
        saveProspectAPI.saveProspect(lead.cadence.id, lead).then(function () {
          getLeads();
          clearForm();
        });
      };

      $scope.clear = function () {
        clearForm();
      };

      getCadences();
      getLeads();
    },
  );
