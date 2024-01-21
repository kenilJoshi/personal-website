import React from 'react'
import { projects } from '../../data/constant'
import ProjectCard from '../Cards/ProjectCard'

function Projects({openModal, setOpenModal}) {

    const cardContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "28px",
        flexWrap: "wrap",
        paddingTop: "27px"
    }

  return (
    <div className='mt-20'>
        <div className="text-center">
            <h1 className='text-center text-4xl font-bold text-white'>Projects</h1>
            <h2 className='text-xl text-slate-400 pt-3 text-center'>I have worked on wide range of Project in web development Here are few Example</h2>
        </div>

        <div style={cardContainer}>
        {projects
            .map((project) => (
              <ProjectCard project={project} key={project.id} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </div>

    </div>
  )
}

export default Projects