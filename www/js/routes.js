angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('menu.piano', {
    url: '/piano',
    views: {
      'side-menu21': {
        templateUrl: 'templates/piano.html',
        controller: 'pianoCtrl'
      }
    }
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })
  .state ('menu.melodia',{
    url: '/melodia',
     views: {
      'side-menu21': {
        templateUrl: 'templates/melodias.html',
        controller: 'melodiaCtrl'
      }
    }
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.inicio', {
    url: '/inicio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu.info', {
    url: '/info',
    views: {
      'side-menu21': {
        templateUrl: 'templates/info.html',
        controller: 'infoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});