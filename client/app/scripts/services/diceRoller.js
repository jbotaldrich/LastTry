
angular.module('DiceRoller', []).
factory('diceRoller', [function() {

    var rollDie = function(dieSize) {
      return Math.floor(Math.random() * (dieSize + 1));
    };

    var rollDice = function(dieSize, numDice) {
      var diceArray = [];
      for (var i = 0; i < numDice; i++) {
        diceArray.push(rollDie(dieSize));
      }
      return diceArray;
    };

    var sumOfDice = function(diceArray, modifier) {
      var mod = modifier || 0;
      return _.reduce(diceArray, function(memo, num) {
        return memo + num;
      }, 0) + mod;
    };

    var takeXHighest = function(diceArray, xDice) {
      if (xDice > diceArray.length) {
        xDice = diceArray.length;
      }
      return _.sortBy(diceArray, function(num) {
        return -num;
      }).slice(0, xDice);


    };
    return {
      rollDice: rollDice,
      sumOfDice: sumOfDice,
      takeXHighest: takeXHighest
    };


  }]);

