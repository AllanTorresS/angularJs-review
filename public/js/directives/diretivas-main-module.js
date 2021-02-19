angular
  .module("diretivasMainModule", [])
  .directive("minhaDiretiva", diretivasMainModule);

function diretivasMainModule() {
  var directive = {
    restrict: "EA", //A-atributo(como se fosse um propriedade do html, ex: alt,src) , E-element (nova tag HTML <></>), como essa diretiva pode ser usada,
    scope: {
      titulo: "@", //@ significa que o valor vai ser passado como string
      url: "@" //@ significa que o valor vai ser passado como string
     
    },
    templateUrl:"js/directives/html/minha-diretiva.html",
    transclude: true 
  };

  return directive;
}
