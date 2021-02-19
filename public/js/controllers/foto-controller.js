(function () {
  angular.module("myApp").controller("FotoController", fotoController);

  fotoController.$inject = ["$http", "$routeParams"];

  function fotoController($http, $routeParams) {
    var vm = this;
    vm.foto = {};
    vm.mensagem = "";

    vm.enviar = function () {
      if (vm.foto._id) {
        $http
          .put("/v1/fotos/" + vm.foto._id, vm.foto)
          .success(function () {
            vm.mensagem = "Foto alterada com sucesso";
          })
          .error(function (erro) {
            console.log(erro);
            vm.mensagem = "Não foi possível alterar";
          });
      } else {
        $http
          .post("v1/fotos", vm.foto)

          .then((response) => {
            console.log("salvo");
            vm.foto = {};
          })
          .catch((err) => console.log("error"));
      }
    };

    /**init */
    (function () {
      if ($routeParams.fotoId) {
        $http
          .get("/v1/fotos/" + $routeParams.fotoId)
          .success(function (foto) {
            vm.foto = foto;
          })
          .error(function (erro) {
            console.log(erro);
            vm.mensagem = "Não foi possível obter a foto";
          });
      }
    })();
    /**fim init */
  }
})();
