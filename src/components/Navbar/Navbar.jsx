import React, {useState, useEffect} from 'react'
import { bio } from '../../data/constant'
import { Link } from 'react-scroll'

function Navbar() {

    const textStyle = 'text-lg font-medium hover:text-FE7BE5 transition ease-in-out delay-150 cursor-pointer'

    const [mobileResponsive, setMobileResponsive] = useState(window.innerWidth <= 768)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setMobileResponsive(window.innerWidth <= 768)
        })
    }, [])

  return (
    <div className='fixed top-0 z-50 w-full'>
        {
            mobileResponsive == false ?
            <div className='flex items-center justify-evenly text-white pt-5 pb-4' style={{gap: "15rem", backgroundColor: "#313866"}}>
        <h1 className='text-3xl font-bold'>Portfolio</h1>
        <div className='flex gap-6'>
            <Link to="about" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}  className={textStyle} >About</Link>
            <Link to="skills" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}  className={textStyle}>Skills</Link>
            <Link to="experience" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}  className={textStyle}>Experience</Link>
            {/* <Link to="projects" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}  className={textStyle}>Projects</Link> */}
            <Link to="education" 
                spy={true} 
                smooth={true} 
                offset={-150} 
                duration={500}  className={textStyle}>Education</Link>
            <Link to="contact" 
                spy={true} 
                smooth={true} 
                offset={-150} 
                duration={500}  className={textStyle}>Contact</Link>    
        </div>

        <div>
            <button className='border-2 border-FE7BE5 w-40 p-2 rounded-3xl text-FE7BE5 transition ease-in-out delay-150 hover:bg-FE7BE5 hover:text-white' >
                <a className='text-lg font-medium ' href={bio.github}>GitHub Profile</a>
            </button>
        </div>
            </div>
            :
            <h1>Kenil</h1>
        }
    </div>
  )
}

export default Navbar