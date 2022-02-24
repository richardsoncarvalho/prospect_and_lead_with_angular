angular.module('app').config([
  '$httpProvider',
  function Middleware($httpProvider) {
    $httpProvider.interceptors.push('AuthMiddleware');
  },
]);
