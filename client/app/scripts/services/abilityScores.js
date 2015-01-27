angular.module('AbilityScore', [])

.constant('ABILITIES', Object.freeze(['STRENGTH', 'DEXTERITY', 
                        'CONSTITUTION', 'WISDOM', 'INTELLIGENCE',
                        'CHARISMA']))
                     
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
])

.factory('StatBlock', ['ABILITY_TYPE', function(ABILITY_TYPE) {
  var baseStat = {};
  var statMods = [];
  
  var setBaseStat = function(abilityScores) {
    if(abilityScores.type !== ABILITY_TYPE.BASE) {
      return;
    }
    baseStat = abilityScores;
  };
  
  var setMod = function(abilityScores) {
    if(abilityScores.type !== ABILITY_TYPE.MOD) {
      return;
    }
    statModes.push(abilityScores);
  };
  
  
  
  var getAbilityScore = function(ability) {
     var score = baseStat[ability];
     for(var i = 0; i < statMods.length; i++) {
       if(statMods[i][ability]) {
         score += statMods[i][ability];
       }
     }
  };
  
  var getModifier = function(ability) {
    return (getAbilityScore(ability) - 10) / 2;
  };
  
}]);