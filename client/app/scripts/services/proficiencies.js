/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('Proficiencies', [])

.controller('proficiencies', [ function() {
    
    var proficiencyScore = function(level) {
      return (1 + Math.Ceiling(level / 4.0));
    };
    
    
    var Proficiency = function(title, description, stat) {
      if(!title || !description || !stat){
        return;
      }
      this.title = title;
      this.description = description;
      this.stat = stat;
      
    };
    
    Proficiency.build = function(data) {
      
    }
    
    return {
      proficiencyScore : proficiencyScore
    };
    
    
    
}]);