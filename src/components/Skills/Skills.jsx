import React from 'react'
import { skills } from '../../data/constant'

function Skills() {

  const skillContainer ={
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "30px",
    gap: "30px",
    justifyContent: "center"
  }
  const Skill = {
    width: "100%",
    maxWidth: "500px",
    background: "#343e85",
    border: "0.1px solid #854CE6",
    // boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
    borderRadius: "16px",
    padding: "18px 36px"
  }
  const skillTitle = {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "20px",
    textAlign: "center"
  }
  const skillList = {
    display: "flex",
    justifyContent: "center", 
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "20px",
  }
  const skillItem = {
    fontSize: "16px",
    fontWeight: "400",
    border: "1px solid #D4ADFC",
    borderRadius: "12px",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px"
  }
  const skillImage = {
    width: "24px",
    height: "24px"
  }

  return (
    <div id='skills'>
      
      <div >
        <div>
          <h1 className='text-center text-4xl font-bold text-white'>Skills</h1>
          <h2 className='text-xl text-slate-400 pt-3 text-center'>Here are some of my skills on which I have been working on for the past 1 years.</h2>
          <div style={skillContainer} className='px-40 max-[600px]:px-8'>
            {skills.map((skill) => (
              <div key={skill.title} style={Skill}>
                <h1 style={skillTitle} className='text-white'>{skill.title}</h1>
                <div style={skillList}>
                  {skill.skills.map((item)=>(
                    <div key={item.name} style={skillItem}>
                      <img src={item.image} style={skillImage} />
                      <span className='text-slate-400'>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills