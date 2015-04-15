({
  baseUrl: ".",
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
  name: "main",
  out: "main-built.js",
  optimize: "none",
});


