import { useState } from 'react'
import './App.css'
import Navbar from './Common Components/Navbar/Navbar'
import HomeScreen from './Pages/HomeScreen/HomeScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Status from './Pages/Status/Status'
import ReportPage from './Pages/ReportPage/ReportPage'
import Prescription from './Pages/HomeScreen/Prescription/Prescription'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
  axios.get('http://localhost:8000/test/get').then(response=>{
    console.log(response);
    
  }).catch(err=>{
    console.log(err);
    
  })

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path='/status' element={<Status/>} />
          <Route path='/report/:id' element={<ReportPage/>}/>
          <Route path='/prescription/:id' element={<Prescription/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
