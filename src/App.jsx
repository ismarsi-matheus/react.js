import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Olá ,mundo !")
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => {
        setMessage('Olá ,fui clicado')
      }}>Mudar mesagem</button>
    </div>
  )
}




export default App;