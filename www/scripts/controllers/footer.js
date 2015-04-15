define('footerController', ['app', 'less'], function(app){
  require(['less!footerStyle']);
  'use strict';
  app.controller('footer', ['$scope', '$http', function($scope, $http){
  }]);
});
