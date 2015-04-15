
// put all urlprefix here
var urlPrefix = '';


require.config({
  baseUrl: urlPrefix + '/app',
  paths: {
    'jquery': 'bower_components/jquery/dist/jquery.min',
    'angular': 'bower_components/angular/angular',
    'ngRoute': 'bower_components/angular-route/angular-route.min',
    'angular-resource': 'angular-resource.min',
    'angular-animate': 'bower_components/angular-animate/angular-animate.min',
    'angular-dropdowns': 'bower_components/angular-dropdowns/dist/angular-dropdowns',
    'ngDropdownStyle': 'bower_components/angular-dropdowns/dist/angular-dropdowns',
    'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
    'flat-ui': 'bower_components/flat-ui/dist/js/flat-ui.min',
    'domReady': 'bower_components/domReady/domReady',
    /* less */
    'less': 'bower_components/require-less/less',
    'lessc': 'bower_components/require-less/lessc',
    'normalize': 'bower_components/require-less/normalize',
    'less-builder': 'bower_components/require-less/less-builder',
    /* css */
    'css': 'bower_components/require-css/css.min',
    /* app */
    'factories': 'scripts/factories',
    'directive': 'scripts/directives',
    'Uploader': 'scripts/services/upload/upload',
    'UploadVideoCover': 'scripts/services/upload/uploadCover',
    'headerController': 'scripts/controllers/header',
    'footerController': 'scripts/controllers/footer',
    'indexController': 'scripts/controllers/index',
    'homeController': 'scripts/controllers/home',
    /* style */
    'indexStyle': 'less/index',
    'footerStyle': 'less/footer',
    'homeStyle': 'less/home',
    'headerStyle': 'less/header',
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'ngRoute': {
      deps: ['angular']
    },
    'angular-resource': {
      deps: ['angular'],
    },
    'angular-animate': {
      deps: ['angular']
    },
    'angular-dropdowns': {
      deps: ['angular']
    },
  },
  urlArgs: 'v' + (new Date()).getTime()
});

define('app', ['angular', 'ngRoute', 'angular-animate', 'angular-dropdowns'], function(angular, ngRoute){
  var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngDropdowns']);
  app.config(['$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', "$httpProvider", "$locationProvider", function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider, $locationProvider){
        app.controllerProvider = $controllerProvider;
        app.compileProvider = $compileProvider;
        app.routeProvider = $routeProvider;
        app.filterProvider = $filterProvider;
        app.provide = $provide;

        $routeProvider
        .when('/', {
          templateUrl: '/app/views/index.html',
        })
        .when('/home/', {
          templateUrl: '/app/views/home.html',
        })

        $locationProvider.html5Mode(true);
      }])
  .constant(
    'urlPrefix', urlPrefix
  )
  .constant(
    'apiUrl', urlPrefix + '/api'
  )
  .constant(
    'homepageUrl', urlPrefix + '/home'
  )
  .constant(
    'loginUrl', urlPrefix + '/accounts/login'
  )
  .constant(
    'logoutUrl', urlPrefix + '/accounts/logout'
  )
  .constant(
    'registerUrl', urlPrefix + '/accounts/register'
  )
  .constant(
    'collectionUrl', urlPrefix + '/api/collection/'
  )
  .constant(
    'videoCoverUrl', urlPrefix + '/api/video/cover/'
  )
  .constant(
    'indexUrl', urlPrefix + '/api/index'
  )
  .constant(
    'stuUrl', 'stu.fudan.edu.cn'
  )
  .constant(
    'joinUs', 'stu.fudan.edu.cn/joinus/'
  );
  return app;
});

define('render', 
  ['domReady', "angular", 'app', 'jquery', 'indexController', 'headerController', 'footerController', 'homeController', 'directive'], 
  function(domReady, angular, app, $){
    domReady(function(){

      // angular
      angular.element().ready(function(){
         angular.bootstrap(document, ["app"]);
      });

    });
  }
);

/*
requirejs(['render', 'css'], function(){
});
*/
;
define("main", function(){});

