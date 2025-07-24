import { useState } from 'react'
import './App.css'
import Navbar from './Common Components/Navbar/Navbar'
// import Footer from './Common Components/Footer/Footer'
import HomeScreen from './Pages/HomeScreen/HomeScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Status from './Pages/Status/Status'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path='/status' element={<Status/>} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
