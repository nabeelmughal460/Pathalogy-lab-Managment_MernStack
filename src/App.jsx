import { useState } from 'react'
import './App.css'
import Navbar from './Common Components/Navbar/Navbar'
import Footer from './Common Components/Footer/Footer'
import HomeScreen from './Pages/HomeScreen/HomeScreen'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='App'>
      <Navbar/>
      <HomeScreen/>
      <Footer/>
    </div>
    
  )
}

export default App
