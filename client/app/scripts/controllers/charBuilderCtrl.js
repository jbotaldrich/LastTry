/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('clientApp')

.controller('CharBuilderCtrl', ['$scope', 'ABILITIES', 'ABScores', 'diceRoller',
  function($scope, ABILITIES, ABScores, diceRoller) {
  
    
  var initializeStats = function() {
    for(var i = 0; i < ABILITIES.length; i++) {
      $scope.stats[ABILITIES[i]] = 0;
    }
  };
  
  $scope.stats = {};
  initializeStats();
  
  $scope.rollStats = function() {
    
  };

  
  
}]);

