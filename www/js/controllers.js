angular.module('app.controllers', ['firebase','ngCordova'])
   
.controller('pianoCtrl', ['$scope', '$stateParams','$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$ionicPopup, $cordovaFile, $cordovaNativeAudio ) {

  var pregsRef = new Firebase("https://triviapoke.firebaseio.com/melodias");
	var record = false;
	$scope.pikachu = function(){
		try{
         window.plugins.NativeAudio.play('pikachu');
		}
		catch(error){
	      	console.log("No es un celular");
		}
    if(record)
      $scope.secuencia.push("pikachu");
	};

  $scope.haunter = function(){
      try{
         window.plugins.NativeAudio.play('haunter');
    }
    catch(error){
          console.log("No es un celular");
    }
    if(record)
      $scope.secuencia.push("haunter");
  };

  $scope.mrmine = function(){
      try{
         window.plugins.NativeAudio.play('mrmine');
    }
    catch(error){
          console.log("No es un celular");
    }
    if(record)
     $scope.secuencia.push("mrmine");
  };

  $scope.ninetales = function(){
      try{
         window.plugins.NativeAudio.play('ninetales');
    }
    catch(error){
          console.log("No es un celular");
    }
    if(record)
     $scope.secuencia.push("ninetales");
  };

  $scope.charizard = function(){
      try{
         window.plugins.NativeAudio.play('charizard');
    }
    catch(error){
          console.log("No es un celular");
    }
    if(record)
     $scope.secuencia.push("charizard");
  };

  $scope.rapidash = function(){
      try{
         window.plugins.NativeAudio.play('rapidash');
    }
    catch(error){
          console.log("No es un celular");
    }
    if(record)
     $scope.secuencia.push("rapidash");
  };

  $scope.play =  play;

  function play(){
    $scope.secuencia = [];
    record = true;
     $scope.play =stop;
    $("#boton").css('background-image', "url(icons/stop.png)");
  }

  function stop(){
    if($scope.secuencia[0]!=null){
      record = false;
      $("#boton").css('background-image', "url(icons/play.png)");
      $scope.play =  play;
      //guardarTXT();
      showPopup();
    }
  }

  function guardarTXT(){
    try{
    var secuenciaTema = $scope.secuencia.toString();
    $cordovaFile.writeFile(cordova.file.dataDirectory, "secuencia.txt", secuenciaTema, true)
    .then(function(exito){
      alert(secuenciaTema);
    },function(error){
      alert("error al escribir");
    })
    }catch(error){
      alert(error);
    }
  }

  function showPopup() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.name">',
    title: 'Ingrese nombre de la melodia',
    subTitle: 'Que sea rapido!!!',
    scope: $scope,
    buttons: [
      {
        text: '<b>Guardar</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.name) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
             pregsRef.push({
              "usuario" : localStorage.getItem("usuario"),
              "nombre": $scope.data.name,
              "secuencia" :  $scope.secuencia
             });
            return $scope.data.name;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });
 }



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

  $scope.login = function(user){
    localStorage.setItem("usuario", user);
  };


}])
   
.controller('inicioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
.controller('melodiaCtrl', ['$scope', '$stateParams', '$timeout',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$timeout) {

  var pregsRef = new Firebase("https://triviapoke.firebaseio.com/melodias");
  $scope.list = [];
  $scope.playing = false;
  pregsRef.on("child_added", function(snapshot){
    $timeout(function(){
      $scope.list.push(snapshot.val());
    });
  });
  $scope.playMelo = function(melodia){
    if(!$scope.playing){
      var time =0;
      $scope.playing = true;
      $.each( melodia, function( key, value ) {
           $timeout(function () {
              try{
                window.plugins.NativeAudio.play(value);
              }catch(error){
              console.log("No es un celular");
              }
              console.log("key:"+key);
              console.log("lengh:"+ (Object.keys(melodia).length-1));
              if(key == (Object.keys(melodia).length-1)){
                $scope.playing = false;
              }
           },time);
          time +=2000;
      });
    }
  }
  
}])   
.controller('infoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 