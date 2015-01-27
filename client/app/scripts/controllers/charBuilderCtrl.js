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
      $scope.stats.push({name: ABILITIES[i],
                         rollNum: i});
    }
  };
  
  angular.extend($scope,  {
    rolls: [{value:0}
      ,{value: 0},{value: 0},{value: 0},{value: 0},{value: 0}],
    stats: []
  });
  
  initializeStats();
  
  var rollStats = function(diceCount) {
    for(var i = 0; i < $scope.rolls.length; i++) {
      $scope.rolls[i].value = diceRoller.sumOfDice(diceRoller.takeXHighest(diceRoller.rollDice(6, diceCount),3),0);
    }
  };
  
  var setStats = function(pointArray) {
   for(var i = 0; i < $scope.rolls.length; i++) {
      $scope.rolls[i].value = pointArray[i];
    }
  };
  
  $scope.typesOfRolls = [
    {title : '4d6 take 3 highest', rollfunc :  rollStats(4)},
    {title: 'Standard Dice', rollfunc : rollStats(3) },
    {title: 'Epic', rollfunc : rollStats(5)},
    {title: 'Point Buy', rollfunc: setStats([10,10,10,10,10,10])},
    {title: 'Standard Array', rollfunct: setStats([8,10,12,13,14,15])}
  ];  
  
  $scope.selectedTypeOfRoll = $scope.typesOfRolls[0];
  $scope.setTypeOfRoll = function(value) {  
    $scope.selectedTypeOfRoll = $scope.typesOfRolls[value];
  }
  

      
  
  
  
  
}]);

