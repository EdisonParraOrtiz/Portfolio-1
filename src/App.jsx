import { Route, Routes } from 'react-router-dom'
import Services from './components/routes/Services'
import Home from './components/routes/Home'
import Skills from './components/routes/Skills'
import About from './components/routes/About'
import Projects from './components/routes/Projects'
import Contact from './components/routes/Contact'
import './App.css'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'


  function App() {

    return (
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/portfolio' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </div>
    )
  }
  
  export default App
  