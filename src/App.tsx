import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'
import { counterContext } from './context/context'
import { Nvabar } from './components/navbar'






function App() {



const ViteLogo = () => (
    <svg width="100" height="100" viewBox="-128 -128 256 256" xmlns="http://www.w3.org/2000/svg">
        <path fill="#41D1FF" d="M -89 128 L 0 -128 L 89 128 Z" />
        <path fill="#41B883" d="m -15 128 l 15 -26 l 15 26 z" />
        <path fill="#34495E" d="m -62 128 l 47 -81 l 15 26 l -47 81 z" />
    </svg>
);


// Inline SVG for the React Logo
const ReactLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="100" height="100">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
    </svg>
);


  const [count , setCount] = useState(0)


  return (
  <>


       <counterContext.Provider value={count}>
        <Nvabar/>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
             <ViteLogo/>
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <ReactLogo />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>



   

 
   
 </counterContext.Provider>

     </>
   
  )
}

export default App
