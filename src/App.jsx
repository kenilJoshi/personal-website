import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wave from 'react-wavify'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  const myStyle = {
    backgroundColor: '#313866',
    height: "auto",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

};

  return (
    <div style={myStyle}>
      <Router>
        <header>
          <Navbar />
        </header>
        <div class="mx-5 lg:mx-80 xl:mx-80 pt-5">
          
          <About />
        </div>
        <Wave fill='#343e85'
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 5,
            amplitude: 20,
            speed: 0.15,
            points: 3
          }}
        />
        <div className='bg-504099'>
          <Skills />
          <Experience />
          <Education />
          <Contact />
          <Wave fill='#313866'
            paused={true}
            style={{ display: 'flex' }}
            options={{
              height: 5,
              amplitude: 20,
              speed: 0.15,
              points: 3
            }}
          />
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
