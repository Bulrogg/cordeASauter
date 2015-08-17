'use strict';

angular.module('corde-a-sauter-app').controller('main-controller', ['$scope', function ($scope) {

  $scope.configurationEntrainements = [
    { dureeTotal:5*60, tempsEffort:10, tempsRecuperation:20 },
    { dureeTotal:8*60, tempsEffort:10, tempsRecuperation:20 },
    { dureeTotal:10*60, tempsEffort:15, tempsRecuperation:15 },
    { dureeTotal:12*60, tempsEffort:15, tempsRecuperation:15 },
    { dureeTotal:15*60, tempsEffort:20, tempsRecuperation:10 },
    { dureeTotal:18*60, tempsEffort:20, tempsRecuperation:10 },
    { dureeTotal:20*60, tempsEffort:25, tempsRecuperation:10 },
    { dureeTotal:20*60, tempsEffort:30, tempsRecuperation:10 },
    { dureeTotal:20*60, tempsEffort:40, tempsRecuperation:10 },
    { dureeTotal:25*60, tempsEffort:50, tempsRecuperation:10 },
    { dureeTotal:25*60, tempsEffort:60, tempsRecuperation:10 },
    { dureeTotal:30*60, tempsEffort:60, tempsRecuperation:10 },
    { dureeTotal:30*60, tempsEffort:75, tempsRecuperation:10 },
    { dureeTotal:30*60, tempsEffort:90, tempsRecuperation:10 },
    { dureeTotal:30*60, tempsEffort:105, tempsRecuperation:10 },
    { dureeTotal:30*60, tempsEffort:120, tempsRecuperation:10 }
  ];

}]);
