angular
  .module('app')
  .controller(
    'mainController',
    function ($scope, getCadencesAPI, saveProspectAPI) {
      $scope.lead = {};

      $scope.leads = [
        {
          id: 1,
          name: 'Richardson',
          email: 'richardsonbrc@gmail.com',
          created_at: '01/03/2022',
          telefone: '(77) 998523145',
        },
        {
          id: 2,
          name: 'Bruno',
          email: 'richardsonbrc@gmail.com',
          created_at: '01/03/2022',
          telefone: '(77) 998523145',
        },
        {
          id: 3,
          name: 'Carvalho',
          email: 'richardsonbrc@gmail.com',
          created_at: '01/03/2022',
          telefone: '(77) 998523145',
        },
      ];

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
        saveProspectAPI.saveProspect(lead.cadence.id, lead).then(function () {
          getCadences();
          clearForm();
        });
      };

      $scope.clear = function () {
        clearForm();
      };

      getCadences();
    },
  );
