angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {
  
  //Parte relacionada ao login e seu MODAL
    //-------------------------------------------------------------------------------------------------------------
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
    //-------------------------------------------------------------------------------------------------------------

              //Funções do Nativas do Ionic

    //-------------------------------------------------------------------------------------------------------------

  $scope.deleteItem = function (item) {
      $scope.items.splice($scope.items.indexOf(item), 1);
  };

  $scope.moveItem = function(item, fromIndex, toIndex) {
          $scope.items.splice(fromIndex, 1);
          $scope.items.splice(toIndex, 0, item);
      };  

   $scope.doRefresh = function() {
        // Subtract from the value of the first item ID to get the new one.
       $scope.$broadcast('scroll.refreshComplete');
    };

 

  $scope.newFriend = function(name, phone){
    // adiciona novo amigo em sua lista de amigos //ListaJson
    alert("New friend successfully!");
    $scope.items.push({
        Img: 7 , Nome: name, Phone: phone, id: 13
      });
    };
  /*
    //utilizado para obter o ultimo id do json
    function lastId(){
      var i;
        for(i=0;i<=$scope.items.length; i++){
        }
        return i+1;
    }
  */
  $scope.items = [
   { Img: 1, Nome: 'Aristoteles',         Phone: '99384-0322', id: 1 },
   { Img: 2, Nome: 'Karl Mark',           Phone: '99818-1883', id: 2 },
   { Img: 3, Nome: 'Friedrich Nietzsche', Phone: '99844-1844', id: 3 },
   { Img: 4, Nome: 'Platão',              Phone: '99428-0348', id: 4 },
   { Img: 5, Nome: 'René Descartes',      Phone: '99596-1650', id: 5 },
   { Img: 6, Nome: 'Sócrates',            Phone: '99469-0399', id: 6 }
 ];
//-------------------------------------------------------------------------------------------------------------

        //Codigo para API do CEP

 //-------------------------------------------------------------------------------------------------------------

  $scope.consultarEndereco = function (cep){
    var urlApi = 'https://viacep.com.br/ws/'+cep+'/json/';
    console.log(urlApi)
    $http.get(urlApi)
    .success(function (data){   
      console.log(data) 
        $scope.endereco = data; 
    })

    .error(function (data, status, headers, config) {
      alert('Sorry, no service available!')
    });
  }

  //-------------------------------------------------------------------------------------------------------------

        //Parte do codigo para mostrar dados do usuario

 //-------------------------------------------------------------------------------------------------------------

 $scope.registers = [
    { Img: 0, name: 'Leonardo', lastName: 'Carloni', email: 'leonardo_carloni', phone: '9168-9615', cep: '14401-248' }
 ];
});




