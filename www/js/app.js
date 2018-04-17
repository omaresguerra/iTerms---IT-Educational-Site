// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.developers', {
      url: '/developers',
      views: {
        'menuContent': {
          templateUrl: 'templates/developers.html'
        }
      }
    })

  .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })


    .state('app.zip', {
      url: '/zip',
      views: {
        'menuContent': {
          templateUrl: 'templates/zip.html'
        }
      }
    }) 

    .state('app.zoom', {
      url: '/zoom',
      views: {
        'menuContent': {
          templateUrl: 'templates/zoom.html'
        }
      }
    }) 

    .state('app.zoom1', {
      url: '/zoom1',
      views: {
        'menuContent': {
          templateUrl: 'templates/zoom1.html'
        }
      }
    }) 

  .state('app.dictionary', {
      url: '/dictionary',
      views: {
        'menuContent': {
          templateUrl: 'templates/dictionary.html',
          controller: 'DictCtrl'
        }
      }
    })

  .state('app.dict', {
      url: '/dict/:dictId',
      views: {
        'menuContent': {
          templateUrl: 'templates/dict.html',
          controller: 'DictionaryCtrl'
        }
      }
    });

  // .state('app.single', {
  //   url: '/playlists/:playlistId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/playlist.html',
  //       controller: 'DictCtrl'
  //     }
  //   }
  // });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dictionary');
});
