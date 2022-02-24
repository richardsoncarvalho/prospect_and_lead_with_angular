angular
  .module('app')
  .controller('getLeadController', function ($scope, getLeadAPI) {
    $scope.leads = [];

    const getLeads = function () {
      getLeadAPI.getLeads().then(function ({ data }) {
        $scope.leads = data.data.length > 0 ? data.data : [];
      });
    };

    $scope.$on('updateLead', function () {
      getLeads();
    });

    getLeads();
  });
