import React from "react"

const JsxExamples = () => {
  const nome = "Fred"

  const user = {
    nome: "Faber",
    idade: 18,
    logged: true,
    rule: "admin",
  }
  function sayHello(nome) {
    return `Estou executando isso com ${nome}`
  }

  const list = [
    { id: 1, nome: "George" },
    { id: 2, nome: "Robert" },
    { id: 3, nome: "May" },
    { id: 4, nome: "Grim" },
    { id: 5, nome: "Fall" },
  ]

  return (
    <>
      <div>
        <h2>Este conteúdo o usuário também irá ver!</h2>
        <p>Olá meu nome é {nome}.</p>
        <p>
          Sou {user.nome} e tenho {user.idade}!
        </p>
        <h4>Podemos executar JS no React também. Veja abaixo:</h4>
        <p>{4 * 5 + (3 / 2) * 10 - 180 * -20}</p>
        <p>{sayHello("'funções'")}</p>
        <p>{sayHello(user.nome)}</p>
        <p id="nome"></p>
        <p className="nome"></p>
        <button
          onClick={() => {
            alert("Olá")
          }}
        >
          Clique em mim
        </button>
        <input type="text" placeholder="Digite alguma coisa..." />
      </div>
      {/* Renderização condicional */}
      {user.logged ? (
        <div>
          <p>Logado</p>
        </div>
      ) : (
        <div>
          <p>Não Logado</p>
        </div>
      )}

      {user.rule === "admin" && <p>É um administrador!</p>}

      {/* Rederização de listas */}
      <div>
        <ul>
          {list.map((user) => (
            <li key={user.id}>
              {user.id} - {user.nome}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default JsxExamples
