'use strict';

angular.module('corde-a-sauter-app').controller('main-controller', ['$scope','$interval', function ($scope, $interval) {

  var time;

  $scope.etat = {};
  $scope.etat.etapeEnCours = 'CONFIGURATION'; 

  $scope.configurationEntrainements = [
  { id:0, dureeTotale:13, tempsEffort:2, tempsRecuperation:2 },
  { id:1, dureeTotale:5*60, tempsEffort:10, tempsRecuperation:20 },
  { id:2, dureeTotale:8*60, tempsEffort:10, tempsRecuperation:20 },
  { id:3, dureeTotale:10*60, tempsEffort:15, tempsRecuperation:15 },
  { id:4, dureeTotale:12*60, tempsEffort:15, tempsRecuperation:15 },
  { id:5, dureeTotale:15*60, tempsEffort:20, tempsRecuperation:10 },
  { id:6, dureeTotale:18*60, tempsEffort:20, tempsRecuperation:10 },
  { id:7, dureeTotale:20*60, tempsEffort:25, tempsRecuperation:10 },
  { id:8, dureeTotale:20*60, tempsEffort:30, tempsRecuperation:10 },
  { id:9, dureeTotale:20*60, tempsEffort:40, tempsRecuperation:10 },
  { id:10, dureeTotale:25*60, tempsEffort:50, tempsRecuperation:10 },
  { id:11, dureeTotale:25*60, tempsEffort:60, tempsRecuperation:10 },
  { id:12, dureeTotale:30*60, tempsEffort:60, tempsRecuperation:10 },
  { id:13, dureeTotale:30*60, tempsEffort:75, tempsRecuperation:10 },
  { id:14, dureeTotale:30*60, tempsEffort:90, tempsRecuperation:10 },
  { id:15, dureeTotale:30*60, tempsEffort:105, tempsRecuperation:10 },
  { id:16, dureeTotale:30*60, tempsEffort:120, tempsRecuperation:10 }
  ];

  $scope.configurationSelectionnee = $scope.configurationEntrainements[0];

  $scope.selectionnerConfigurationHandler = function(conf) {
    $scope.configurationSelectionnee = conf;
  };

  $scope.cestPartiHandler = function() {
    $scope.etat.nbSecDepuisLeDebut = 0;
    time = $interval(execChaqueSeconde, 1000);
  };

  $scope.stopHandler = function() {
    finExercice();
    chargerConfiguration();
  };

  function chargerConfiguration() {
    $scope.etat.etapeEnCours = 'CONFIGURATION';
  }

  function finExercice() {
    $interval.cancel(time);
  }

  function execChaqueSeconde() {
    majDataExerciceEnCours();
    if($scope.etat.etapeEnCours === 'TERMINE') {
      finExercice();
    }
    else {
      $scope.etat.nbSecDepuisLeDebut ++;  
    }
  }

  function majDataExerciceEnCours() {
    var preparationEnSeconde = 1;
    var nbSecTotalEntrainement = $scope.configurationSelectionnee.dureeTotale;
    var nbSecDepuisLeDebut = $scope.etat.nbSecDepuisLeDebut;
    var nbSecAvantFinEntrainement = nbSecTotalEntrainement - nbSecDepuisLeDebut;
    if(nbSecDepuisLeDebut < preparationEnSeconde) {  
      $scope.etat.etapeEnCours = 'PREPARATION';
      $scope.etat.nbSecAvantFinEtape = preparationEnSeconde - nbSecDepuisLeDebut;
      $scope.etat.nbSecAvantFinEntrainement = nbSecAvantFinEntrainement;
    }
    else if(nbSecDepuisLeDebut >= nbSecTotalEntrainement) {
      $scope.etat.etapeEnCours = 'TERMINE';
      $scope.etat.nbSecAvantFinEtape = null;
      $scope.etat.nbSecAvantFinEntrainement = 0;
    }
    else {
      var nbSecEffort = $scope.configurationSelectionnee.tempsEffort;
      var nbSecRecuperation = $scope.configurationSelectionnee.tempsRecuperation;
      var tempsSansPreparation = nbSecDepuisLeDebut - preparationEnSeconde;
      var nbSecondeEtape = nbSecEffort + nbSecRecuperation;
      var secondeSerie = tempsSansPreparation % nbSecondeEtape;
      if(secondeSerie < nbSecEffort) {
        $scope.etat.etapeEnCours = 'EFFORT';
        $scope.etat.nbSecAvantFinEtape = nbSecEffort - secondeSerie;
        $scope.etat.nbSecAvantFinEntrainement = nbSecAvantFinEntrainement;
      }
      else {
        $scope.etat.etapeEnCours = 'REPOS';
        $scope.etat.nbSecAvantFinEtape = nbSecRecuperation - (secondeSerie - nbSecEffort);
        $scope.etat.nbSecAvantFinEntrainement = nbSecAvantFinEntrainement;
      }
    }
  }

}])

.filter('secToStr', function() {
  return function(nbSecond) {
    var nbMin = Math.floor(nbSecond / 60);
    var nbSec = nbSecond % 60;
    var minStr = nbMin > 0 ? nbMin + ' min' : '';
    var secStr = nbSec > 0 ? nbSec + ' sec' : '';
    return minStr + ' ' + secStr;
  };
});
