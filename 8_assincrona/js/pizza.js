// Criando uma nova Promise
const promessaDePizza = new Promise((resolve, reject) => {
  // Simula a espera pela pizza
  setTimeout(() => {
    const deuCerto = Math.random() > 0.5 // 50% de chance de dar certo

    if (deuCerto) {
      // A promessa foi cumprida
      resolve("A pizza de calabresa chegou!")
    } else {
      // A promessa foi quebrada
      reject("O entregador se perdeu. Sem pizza :(")
    }
  }, 3000) // 2 segundos de espera
})
