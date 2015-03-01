'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'DiceRoller',
    'Scores',
    'CharacterSheet',
    'AbilityRadio',
    'SummaryView'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/characterBuilder', {
        templateUrl: 'views/character_builder.html',
        controller: 'CharBuilderCtrl'
      })
      .when('/classBuilder', {
        templateUrl: 'views/class_builder.html',
        controller: 'ClassBuilderCtrl'
      })
      .when('/backgroundBuilder', {
        templateUrl: 'views/background_builder.html',
        controller: 'BackgroundBuilderCtrl'
      })
      .when('/raceBuilder', {
        templateUrl: 'views/race_builder.html',
        controller: 'RaceBuilderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
