angular.module('CharacterSheet', [])

.factory('characterSheet', [ function(statBlock) {
    var _baseStat;
    var _race;
    var _background;
    var _pcClass;
    var _items;
    
    var setBaseStat = function(baseStat) {
      _baseStat = baseStat;
    };
    
    var setRace = function(race) {
      _race = race;
    };
    
    var setBackground = function(background) {
      _background = background;
    };
    
    var setPcClass = function(pcClass) {
      _pcClass = pcClass;
    };
    
    var setItems = function(items) {
      _items = items;
    };
    
     var getBaseStat = function() {
      return _baseStat;
    };
    
    var getRace = function() {
      return _race;
    };
    
    var getBackground = function() {
      return _background;
    };
    
    var getPcClass = function() {
      return _pcClass;
    };
    
    var getItems = function() {
      return _items;
    };
    
    return {
      setBaseStat : setBaseStat,
      setRace : setRace,
      setBackground : setBackground,
      setPcClass : setPcClass,
      setItems : setItems,
      getBaseStat : getBaseStat,
      getRace : getRace,
      getBackground : getBackground,
      getPcClass : getPcClass,
      getItems : getItems
    };
}]);


//Character Sheet is composed of
//Base stats
//Race
//Background
//Class
//Items
