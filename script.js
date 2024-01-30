document.addEventListener('DOMContentLoaded', function () {
  // Inicialização do AOS
  AOS.init()

  // Configuração do Typed.js
  var options = {
    strings: ['ENTREGAS RÁPIDAS, SOLUÇÕES ÁGEIS'],
    typeSpeed: 50,
    loop: false,
  }

  // Inicialização do Typed.js
  var typed = new Typed('#typed-text', options)
})
