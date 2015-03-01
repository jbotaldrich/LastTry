var app = angular.module('Scores', []);

app.constant('ABILITIES', Object.freeze({
  STR: 'Strength', 
  DEX: 'Dexterity', 
  CON: 'Constitution', 
  WIS: 'Wisdom', 
  INT: 'Intelligence',
  CHA: 'Charisma'}));
                     
app.constant('ABILITY_TYPE', Object.freeze({MOD: 'Modifier', BASE: "Base"}));

app.factory('scores', [function() {
    
    var ScoresInterface = {
      getScore : function(item) {},
      getAvailable : function() {},
      setScores : function(item, val) {},
      build : function(data) {}
    };
    
    var AbilityScores = function(strength, dexterity, constitution, 
                                  intelligence, wisdom, charisma) {
      this.Strength = strength;
      this.Dexterity = dexterity;
      this.Constitution = constitution;
      this.Intelligence = intelligence;
      this.Wisdom = wisdom;
      this.Charisma = charisma;
    };
    
    AbilityScores.prototype = Object.create(ScoresInterface);
   
    var abilityScoresBuilder = function(abilities) {
      return new AbilityScores(abilities.Strength,
                               abilities.Dexterity,
                               abilities.Constitution,
                               abilities.Intelligence,
                               abilities.Wisdom,
                               abilities.Charisma);
    };
    
    AbilityScores.prototype.getScore = function(item) {
      return this[item];
    };
    
    AbilityScores.prototype.getAvailable = function() {
      return Object.keys(this);
    };
    
    AbilityScores.prototype.setScores = function(item, val) {
        this[item] = val;
    };
    
    
    var ModScores = function(abilities) {
      var keys = Object.keys(abilities);
      for(var i = 0; i < keys.length; i++) {
        ModScores[keys[i]] = abilities[keys[i]];
      }
    };
    
    var modScoreBuilder = function(abilities) {
      return new ModScores(abilities);
    };
    
    ModScores.prototype = Object.create(ScoresInterface);
    
    ModScores.prototype.getScore = function(item) {
      if(Object.keys(this).indexOf(item) !== -1) {
        return this[item];
      }
    };
    
    ModScores.prototype.getAvailable = function() {
      return Object.keys(this);
    };
    
    ModScores.prototype.setScores = function(item, val) {
      this[item] = val;
    };
    
  var StatBlock = function() {
  };
 
  
  StatBlock.setBaseStat = function(abilityScores) {
    if(abilityScores.type !== ABILITY_TYPE.BASE) {
      return;
    }
    baseStat = abilityScores;
  };
  
  StatBlock.setMod = function(abilityScores) {
    if(abilityScores.type !== ABILITY_TYPE.MOD) {
      return;
    }
    statModes.push(abilityScores);
  };
  
  
  
  StatBlock.getAbilityScore = function(ability) {
     var score = baseStat[ability];
     for(var i = 0; i < statMods.length; i++) {
       if(statMods[i][ability]) {
         score += statMods[i][ability];
       }
     }
  };
  
  StatBlock.getModifier = function(ability) {
    return (getAbilityScore(ability) - 10) / 2;
  };
  
  var statBlockBuilder = function() {
    return new StatBlock();
  }
   
   return {
     modScoreBuilder : modScoreBuilder,
     abilityScoreBuilder : abilityScoresBuilder,
     statBlock : statBlockBuilder
   };
}]);