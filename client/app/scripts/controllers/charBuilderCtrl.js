/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('clientApp')

.controller('CharBuilderCtrl', ['$scope', 'ABILITIES', 'diceRoller', 'scores', 'characterSheet',
  function($scope, ABILITIES, diceRoller, scores, characterSheet) {
  
    
  var initializeStats = function() {
    for(var ab in ABILITIES) {
      if(ABILITIES.hasOwnProperty(ab)) {
        $scope.stats.push({name: ABILITIES[ab], rollNum: -1});
      }
    }
  };
  
  angular.extend($scope,  {
    rolls: [{value:3}
      ,{value: 3},{value: 3},{value: 3},{value: 3},{value: 3}],
    stats: []
  });
  
  initializeStats();
  
  var rollStats = function(diceCount) {
    for(var i = 0; i < $scope.rolls.length; i++) {
      $scope.rolls[i].value = diceRoller.sumOfDice(diceRoller.takeXHighest(diceRoller.rollDice(6, diceCount),3),0);
    }
  };
  
  var findStat = function(statName) {
    $scope.stats.filter(function(stat) {
      if(stat.name === statName) {
        return stat;
      }
    });
  };
  
  $scope.setSelected = function(rollIndex, stat) {
    findStat(stat.name).rollNum = rollIndex;
  };
  
  var setStats = function(pointArray) {
   for(var i = 0; i < $scope.rolls.length; i++) {
      $scope.rolls[i].value = pointArray[i];
    }
  };
  $scope.acceptScores = function() {
    var data = {};
    for(var i = 0; i < $scope.stats.length; i++) {
      if($scope.stats[i].rollNum === -1) {
        return;
      }
      data[$scope.stats[i].name] = $scope.rolls[stats[i].rollNum].value;
    }
    characterSheet.setBaseStats(scores.abilityScoresBuilder(data));
  };
  
 
  
  $scope.typesOfRolls = [
    {title : '4d6 take 3 highest', rollfunc :  function () {rollStats(4);}},
    {title: 'Standard Dice', rollfunc : function() {rollStats(3); }},
    {title: 'Epic', rollfunc : function() { return rollStats(5);}},
    {title: 'Point Buy', rollfunc: function() {return setStats([10,10,10,10,10,10]);}},
    {title: 'Standard Array', rollfunc: function() {return setStats([8,10,12,13,14,15]);}}
  ];  
  
  $scope.selectedTypeOfRoll = $scope.typesOfRolls[0];
  $scope.setTypeOfRoll = function(value) {  
    $scope.selectedTypeOfRoll = $scope.typesOfRolls[value];
    $scope.selectedTypeOfRoll.rollfunc();
  };

}]);

