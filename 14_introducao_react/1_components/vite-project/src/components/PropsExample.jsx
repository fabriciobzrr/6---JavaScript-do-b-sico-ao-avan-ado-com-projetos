import React from "react"

const PropsExample = (nome, idade) => {
  return (
    <div>
      <h1>Olá {nome}!</h1>
      <p class="myAge">Minha idade é: {idade} anos.</p>
    </div>
  )
}

export default PropsExample
