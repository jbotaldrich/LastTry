/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('SummaryView', ['CharacterSheet'])

.directive('summaryView', [function() {
    
    return {
      template: '{{stats.Strength}}',
      restrict: 'EA',
      controller: 'summaryViewCtrl',
      controllerAs: 'ctrl'
    };
    
    
}])

.controller('summaryViewCtrl', ['$scope', 'characterSheet', function($scope, characterSheet) {
    $scope.stats = characterSheet.getBaseStat();
    
    this.isUndefinedOrNull = function(val) {
      return angular.isUndefined(val) || val === null;
    };
}]);