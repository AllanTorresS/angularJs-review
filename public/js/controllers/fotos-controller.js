(function () {
  "use strict";

  angular.module("myApp").controller("FotosController", fotosController);

  fotosController.$inject = ["$http"];

  function fotosController($http) {
    var vm = this;
    vm.fotos = [];
    vm.mensagem = "";

    vm.carregarFotos = function () {
      $http
        .get("v1/fotos")
        .success(function (res) {
          vm.fotos = res;
        })
        .error(function (err) {
          console.log("err");
        });
    };

    vm.remover =  function(foto, index) {
    
      $http.delete('/v1/fotos/' + foto._id)
      .success(function() {
          console.log('Foto ' + foto.titulo + ' removida com sucesso!');
          vm.fotos.splice(index,1)
          vm.mensagem="removido com sucesso"

      })
      .error(function(erro) {
          console.log('Não foi possível apagar a foto ' + foto.titulo);
      });
  };

    vm.carregarFotos();
  }
})();
