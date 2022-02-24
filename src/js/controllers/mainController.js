angular
  .module('app')
  .controller('mainController', function ($scope, $http, config) {
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

    const getCadences = () => {
      $http.get(`${config.baseUrl}/cadences`).then(function ({ data }) {
        $scope.cadences = data.data;
      });
    };

    $scope.addLead = function (lead) {
      const httpLead = {
        ...lead,
        created_at: new Date(),
      };

      $scope.leads.push(httpLead);
    };

    getCadences();
  });
