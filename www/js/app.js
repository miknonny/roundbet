'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('roundbet', ['ionic', 'roundbet.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    
    // This state can not be accessed directly but can be
    // activated by selecting any of its child state.
    // child state also inherit scopes defined on its controllers
    // also its custom data.
    .state('home', {
      url: '/home',
      abstract: true,
      templateUrl: 'templates/home.html',
      controller: ''
    })

    // This is showsup when the user launches the application.
    // also contains the link for the two states login and signup
    .state('home.welcome', {
      url:'/welcome',
      view: {
        'home-welcome': {
          templateUrl: '',
          controller: ''
        }
      }
    })

    // Activated when the Login link is clicked.
    .state('home.login', {
      url:'/login',
      views: {
        'home-login': {
          templateUrl: 'login.html',
          controller: 'LoginCtrl'
        }
      }
    })


    // Activated when the  Signup link is clicked.
    .state('home.signup', {
      url:'/signup',
      views: {
        'home-signup': {
          templateUrl: 'signup.html',
          controller: 'SignupCtrl'
        }
      }
    });
  
  $urlRouterProvider.otherwise('/home/login');
  
  // .state('', {
  //     url:'',
  //     view: {
  //       '': {
  //         templateUrl: '',
  //         controller: ''
  //       }
  //     }
  //   });

});

