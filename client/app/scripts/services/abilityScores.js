angular.module('AbilityScore', [])

.constant('ABILITIES', Object.freeze(['Strength', 'Dexterity', 
                        'Constitution', 'Wisdom', 'Intelligence',
                        'Charisma']))
                     
.constant('ABILITY_TYPE', Object.freeze(['MOD', 'BASE']))

.factory('ABScores', ['ABILITIES', 'ABILITY_TYPE', function(ABILITIES, ABILITY_TYPE) {
  
  
  var statsExist = function(input){
    for(var stat in input) {
      if(input.hasOwnProperty(stat) && 
         ABILITIES.indexOf(stat) === -1) {
        return false;
      }
    }
    return true;
  };
  
  var AbilityScores = function(stats, type) {    
    this.stats = stats;
    this.type = type;
  };
  
  var checkType = function(type) {
    return possibleTypes.indexOf(type) !== -1;
  };
  
  AbilityScores.possibleTypes = angular.copy(ABILITY_TYPE);
  
  AbilityScores.build = function(data) {
    if(!checkType(data.type) || !statsExist(data.stats)){
      return;
    }
    return new AbilityScores(
      data.stats,
      data.type
    );
  };
  
  AbilityScores.getStats = function() {
    return this.stats;
  };
  
  AbilityScores.getType = function() {
    return this.type;
  };    
  
  return AbilityScores;
  }
]);

