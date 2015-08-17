'use strict';

angular.module('corde-a-sauter-app').controller('main-controller', ['$scope', function ($scope) {

  $scope.exerciceEnCours = false;

  $scope.configurationEntrainements = [
    { id:1, dureeTotal:5*60, tempsEffort:10, tempsRecuperation:20 },
    { id:2, dureeTotal:8*60, tempsEffort:10, tempsRecuperation:20 },
    { id:3, dureeTotal:10*60, tempsEffort:15, tempsRecuperation:15 },
    { id:4, dureeTotal:12*60, tempsEffort:15, tempsRecuperation:15 },
    { id:5, dureeTotal:15*60, tempsEffort:20, tempsRecuperation:10 },
    { id:6, dureeTotal:18*60, tempsEffort:20, tempsRecuperation:10 },
    { id:7, dureeTotal:20*60, tempsEffort:25, tempsRecuperation:10 },
    { id:8, dureeTotal:20*60, tempsEffort:30, tempsRecuperation:10 },
    { id:9, dureeTotal:20*60, tempsEffort:40, tempsRecuperation:10 },
    { id:10, dureeTotal:25*60, tempsEffort:50, tempsRecuperation:10 },
    { id:11, dureeTotal:25*60, tempsEffort:60, tempsRecuperation:10 },
    { id:12, dureeTotal:30*60, tempsEffort:60, tempsRecuperation:10 },
    { id:13, dureeTotal:30*60, tempsEffort:75, tempsRecuperation:10 },
    { id:14, dureeTotal:30*60, tempsEffort:90, tempsRecuperation:10 },
    { id:15, dureeTotal:30*60, tempsEffort:105, tempsRecuperation:10 },
    { id:16, dureeTotal:30*60, tempsEffort:120, tempsRecuperation:10 }
  ];

  _.each($scope.configurationEntrainements, function(conf) {
    conf.dureeTotalLibelle = secondeToStr(conf.dureeTotal);
    conf.tempsEffortLibelle = secondeToStr(conf.tempsEffort);
    conf.tempsRecuperationLibelle = secondeToStr(conf.tempsRecuperation);
  });

  $scope.configurationSelectionnee = $scope.configurationEntrainements[0];

  $scope.selectionnerConfigurationHandler = function(conf) {
    $scope.configurationSelectionnee = conf;
  };

  $scope.cestPartiHandler = function() {
    $scope.exerciceEnCours = true;
  };

  $scope.stopHandler = function() {
    $scope.exerciceEnCours = false;
  };

  function secondeToStr(nbSecond) {
    var nbMin = Math.floor(nbSecond / 60);
    var nbSec = nbSecond % 60;
    var minStr = nbMin > 0 ? nbMin + " min" : "";
    var secStr = nbSec > 0 ? nbSec + " sec" : "";
    return minStr + " " + secStr;
  };

}]);
