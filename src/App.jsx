import { Route, Routes } from 'react-router-dom'
import Services from './components/routes/Services'
import Home from './components/routes/Home'
import Skills from './components/routes/Skills'
import Header from './components/shared/Header'
import About from './components/routes/About'
import Projects from './components/routes/Projects'
import Contact from './components/routes/Contact'

  function App() {

    return (
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/portfolio' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    )
  }
  
  export default App
  