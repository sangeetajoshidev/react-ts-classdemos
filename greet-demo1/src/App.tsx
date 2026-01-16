import './App.css'
import BoilingVerdict from './BoilingVerdict'
import Greeting from './Greet'
import Welcome from './Welcome'

function App() {
 

  return (
    <>
      <h4> First react demo</h4>
        <h3>Hello World</h3>
        <h4>Greeting comp follows</h4>

        <BoilingVerdict temp= {130} />

        <Greeting name="John" role="Developer" />
        <Greeting name="Manisha" role="Designer" />
        
        <Welcome fname="Sangeeta" lname="joshi" />
   </>
  )
}

export default App
