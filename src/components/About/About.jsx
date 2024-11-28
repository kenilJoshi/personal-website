import React from 'react'
import { bio } from '../../data/constant'
import TypeWritter from 'typewriter-effect'
import heroImage from '../../../public/ken.jpg'

function About() {

    const imgStyle = {
        position: "relative",
        width: "102rem",
        borderRadius: "50%",
        border: "2px solid #D4ADFC",
    }

    const buttonStyle = {
        textDecoration: "none",
        width: "95%",
        maxWidth: "300px",
        textAlign: "center",
        padding: "18px 0",
        marginTop: "10px",
        color:"white",
        borderRadius: "20px",
        cursor: "pointer",
        fontSize: "20px",
        fontWeight: "600",
        transition: "all 0.2s ease-in-out !important",
        background: "hsla(271, 100%, 50%, 1)",
        background: "linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)",
        background: "-moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)",
        background: "-webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)",
    }

  return (
    <div className='max-[600px]:flex-col-reverse flex pb-28 px-8 pt-44 max-[600px]:pt-16' id='about'>
        <div className='pr-5 max-[600px]:text-center max-[600px]:pr-0'>
            <h1 className='text-6xl max-[600px]:text-3xl font-bold text-white'>Hi, I am <br/> {bio.name} </h1>
            <h1 className='flex pt-4 text-3xl max-[600px]:text-xl max-[600px]:justify-center font-bold text-white'>
                I am a 
                <span className='text-FE7BE5 pl-2 cursor-pointer'>
                    <TypeWritter
                        options={{
                            strings: bio.roles,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
            </h1>

            <h2 className='text-xl text-slate-400 pt-3'>{bio.description}</h2>
            <a href='https://drive.google.com/file/d/1gRDAo-TWFDA8UCo3MjZ3QyW-kPJQpr8S/view?usp=sharing'>
                <button style={buttonStyle}>Check Resume</button>
            </a>
        </div>
        <div>
            <div>
                <img src={heroImage} className='max-[600px]:left-0 left-6' alt="" style={imgStyle} />
            </div>
        </div>

    </div>
  )
}

export default About