import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { bio } from '../../data/constant';
import { Link } from 'react-scroll'

function Footer() {

    const footerContainer = {
        width: "100%",
        paddingBottom: "2rem",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#313866"
    }

    const footerWrapper = {
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        alignItems: "center",
        padding: "1rem"
    }

    const logo = {
        fontWeight: "600",
        fontSize: "20px"
    }

    const nav = {
        width: "100%",
        maxWidth: "800px",
        marginTop: "0.5rem",
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
        justifyContent: "center"
    }

    const navLink = {
        textDecoration: "none",
        fontSize: "1.2rem",
        transition: "color 0.2s ease-in-out",
        cursor: "Pointer"
    }

    const socialMediaIcons = {
        display: "flex",
        marginTop: "1rem"
    }

    const socialMediaIcon = {
        display: "inline-block",
        margin: "0 1rem",
        fontSize: "1.5rem",
        color: "white",
        transition: "color 0.2s ease-in-out"
    }



  return (
    <div style={footerContainer}>
        <div style={footerWrapper}>
            <div style={logo} className='text-FE7BE5'>
                Kenil Joshi
            </div>

            <div className='max-[600px]:flex-wrap gap-8 max-[600px]:gap-4 max-[600px]:text-center max-[600px]:text-xs' style={nav}>
                <Link to="about" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}  style={navLink} className='text-white' >About</Link>
                <Link to="skills" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}  style={navLink} className='text-white'>Skill</Link>
                <Link to="experience" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}  style={navLink} className='text-white'>Experience</Link>
                <Link to="education" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}  style={navLink} className='text-white' >Education</Link>
                <Link to="contact" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}  style={navLink} className='text-white' >Contact</Link>
            </div>
            <div style={socialMediaIcons}>
                <div style={socialMediaIcon} target = "display"><a href={bio.linkedin}><LinkedInIcon /></a></div>
                <div style={socialMediaIcon} target = "display"><a href={bio.github}><GitHubIcon /></a></div>
                <div style={socialMediaIcon} target = "display"><a href={bio.twitter}><TwitterIcon /></a></div>
            </div>
        </div>

    </div>
  )
}

export default Footer