import {useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  return (
      <>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <div>
          name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <h1>{name}</h1>
        </div>

      </>
  )
}

export default App
