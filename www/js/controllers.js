angular.module('app.controllers', ['firebase','ngCordova'])
   
.controller('pianoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaNativeAudio) {

  $scope.secuencia = [];
	
	$scope.pikachu = function(){
		try{
         window.plugins.NativeAudio.play('pikachu');
		}
		catch(error){
	      	console.log("No es un celular");
		}
    $scope.secuencia.push("pikachu");
	};

  $scope.haunter = function(){
      try{
         window.plugins.NativeAudio.play('haunter');
    }
    catch(error){
          console.log("No es un celular");
    }
    $scope.secuencia.push("haunter");
  };

  $scope.mrmine = function(){
      try{
         window.plugins.NativeAudio.play('mrmine');
    }
    catch(error){
          console.log("No es un celular");
    }
    $scope.secuencia.push("mrmine");
  };

  $scope.ninetales = function(){
      try{
         window.plugins.NativeAudio.play('ninetales');
    }
    catch(error){
          console.log("No es un celular");
    }
    $scope.secuencia.push("ninetales");
  };

  $scope.charizard = function(){
      try{
         window.plugins.NativeAudio.play('charizard');
    }
    catch(error){
          console.log("No es un celular");
    }
    $scope.secuencia.push("charizard");
  };

  $scope.rapidash = function(){
      try{
         window.plugins.NativeAudio.play('rapidash');
    }
    catch(error){
          console.log("No es un celular");
    }
    $scope.secuencia.push("rapidash");
  };



}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.login = function(){
    
  };


}])
   
.controller('inicioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('infoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 