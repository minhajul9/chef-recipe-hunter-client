import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <path
        d="M100,20 L20,100 L100,180 L180,100 Z"
        fill="#F86767"
        stroke="#000"
        strokeWidth="4"
      />
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        fill="#FFF"
        fontFamily="Arial"
        fontSize="72"
        fontWeight="bold"
      >
        Mezban
      </text>
      <text
        x="50%"
        y="80%"
        textAnchor="middle"
        fill="#F86767"
        fontFamily="Arial"
        fontSize="24"
      >
        Restaurant &amp; Catering Services
      </text>
    </svg>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
