import { useState } from 'react'
import EntradasContainer from './containers/EntradasContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="row">
      <EntradasContainer></EntradasContainer>
    </div>
    </>
  )
}

export default App
