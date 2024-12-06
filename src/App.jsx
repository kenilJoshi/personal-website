import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Wave from 'react-wavify';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Blog from './components/Blog/Blog'; // Import the Blog component
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BlogNavbar from './components/Navbar/BlogNavbar';

function App() {
  const myStyle = {
    backgroundColor: '#313866',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const [blogPathName, setBlogPathName] = useState(true)
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  const Conditional_navbar = () => {
    const location = useLocation()
    console.log(location.pathname);
    
    return location.pathname !== "/blog" ? <Navbar /> : <BlogNavbar />
  }

  return (
    <div style={myStyle}>
      <Router>
        <header>
          <Conditional_navbar />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="mx-5 lg:mx-80 xl:mx-80 pt-5">
                  <About />
                </div>
                <Wave
                  fill="#343e85"
                  paused={false}
                  style={{ display: 'flex' }}
                  options={{
                    height: 5,
                    amplitude: 20,
                    speed: 0.15,
                    points: 3,
                  }}
                />
                <div className="bg-504099">
                  <Skills />
                  <Experience />
                  <Projects openModal={openModal} setOpenModal={setOpenModal} />
                  <Education />
                  <Contact />
                  <Wave
                    fill="#313866"
                    paused={true}
                    style={{ display: 'flex' }}
                    options={{
                      height: 5,
                      amplitude: 20,
                      speed: 0.15,
                      points: 3,
                    }}
                  />
                  <Footer />
                </div>
                {openModal.state && (
                  <ProjectDetails
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                )}
              </>
            }
          />
          <Route path="/blog" element={<Blog />} /> {/* Add Blog Route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
