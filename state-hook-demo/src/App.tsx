

import { useState } from 'react'
import './App.css'
import Cars from './CarComp'

function App() {

 const [count,setCount] =useState<number>(0)

  return (
    <>
      <div>
      <Cars />
      </div>
      <h1>State hook demo</h1>

      <h2>Current counter value {count}</h2>
      
      <button onClick={()=>setCount(count+1)} >Increment</button>
     
    </>
  )
}

export default App
