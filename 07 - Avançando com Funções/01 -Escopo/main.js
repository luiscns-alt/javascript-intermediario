// Escopo Global
var b;

function planets() {
  function pais() {
    function estados() {
      // Escopo Local
      var a;
      function cidade() {
        function bairro() {
          function casa() {
            function suaCasa() {}
          }
        }
      }
    }
    estados();
  }
}
