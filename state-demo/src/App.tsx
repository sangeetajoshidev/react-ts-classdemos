import './App.css'
import Cars from './CarsComp'
import CounterComp from './Counter'
import ToggleEffect from './toggleEffect'

function App() {


  return (
    <>
      <h2> State demo</h2>
      <h3>Counter increments</h3>
      <CounterComp />
      <ToggleEffect />
      <Cars />
    </>
  )
}

export default App
