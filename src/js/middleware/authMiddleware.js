angular.module('app').factory('AuthMiddleware', function middleware(config) {
  return {
    request: function (req) {
      req.headers['Authorization'] = config.token;

      return req;
    },

    response: function (req) {
      req.headers['Authorization'] = config.token;

      return req;
    },
  };
});
