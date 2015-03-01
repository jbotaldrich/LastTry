/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('Proficiencies', [])

.controller('proficiencies', [ function() {
    
    var Proficiency = function(title, description, stat) {
      if(!title || !description || !stat){
        return;
      }
      this.title = title;
      this.description = description;
      this.stat = stat;
      
    };
    
    Proficiency.prototype.getScore = function(level) {
      return (1 + Math.Ceiling(level / 4.0));
    };
    
    var proficiencyBuilder = function(data) {
      return new Proficiency(data.title, data.description, data.stat);
    };
    
    return {
      proficiencyScore : proficiencyBuilder
    };
    
    
    
}]);