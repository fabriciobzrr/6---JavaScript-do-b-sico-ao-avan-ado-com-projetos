import { use, useState } from "react"

// useState = Hooks

const useStateComponent = () => {
  const [count, startCount] = useState(0)

  const incrCount = () => {
    startCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <h1>Contador de Cliques {count}</h1>
      <input type="submit" value="Clique aqui" onClick={incrCount} />
    </div>
  )
}

export default useStateComponent
