import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import MainLayout from './MainLayout'

function App() {
  

  return (
    <>
        <h1>Routing Demo</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />} />

            <Route path="/home" element ={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

          </Routes>

        </BrowserRouter>
     
    </>
  )
}

export default App
