angular
  .module('app')
  .controller('mainController', function ($scope, getCadencesAPI) {
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
      const httpLead = {
        ...lead,
        created_at: new Date().toLocaleDateString(),
      };

      $scope.leads.push(httpLead);
      clearForm();
    };

    $scope.clear = function () {
      clearForm();
    };

    getCadences();
  });
