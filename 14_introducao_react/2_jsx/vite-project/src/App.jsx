import "./App.css"
import JsxExamples from "./components/JsxExamples"

function App() {
  const userName = {
    firstName: "Dohvakiin",
    lastName: "Dragonborn",
  }

  const nickName = "voxxer"
  let loggedIn = true

  const imcData = {
    peso: 65,
    altura: 1.81,
  }

  const imc = (imcData.peso / imcData.altura ** 2).toFixed(1)

  return (
    <>
      <div>
        <h1>JSX</h1>
      </div>
      <JsxExamples />
      <p>
        Olá, {userName.firstName} {userName.lastName}
      </p>
      <p>
        Seu nickname é {nickName} e você está{" "}
        {loggedIn ? "Logado" : "Convidado"}.
      </p>

      <p>Seu IMC é de: {imc}</p>
    </>
  )
}

export default App
