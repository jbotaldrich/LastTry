/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('AbilityRadio',[]).

directive('abilityRadio', [function() {
    
    return {
      controller: 'abilityRadioCtrl',
      controllerAs: 'ctrl',
      scope: {
        rollGroup : '=',
        statType : '=',
      },
      restrict: 'AE',
      template: '<input type="radio" ng-model="checked" ng-click="ctrl.broadcastClick()">{{statType}}</input>'
    };
    
}])

.controller('abilityRadioCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    
    $scope.checked = false;
    var radioHash = $scope.rollGroup.toString() + $scope.statType.toString();
    
    this.broadcastClick = function() {
      $rootScope.$broadcast($scope.rollGroup.toString(), radioHash);
      $rootScope.$broadcast($scope.statType.toString(), radioHash);
    };
    
    var isChecked = function(arg) {
      if(arg !== radioHash) {
        $scope.checked = false;
      }
    };
    
    var setListener = function(topic) {
      $scope.$on(topic, function(event, data) {
        isChecked(data);
      });
    };
    
    setListener($scope.rollGroup.toString());
    setListener($scope.statType.toString());
    
}]);