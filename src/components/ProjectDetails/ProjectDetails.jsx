import React from 'react'
// import { GitHub, LinkedIn } from '@mui/icons-material';
// import CloseIcon from '@mui/icons-material/Close';
import { Modal } from '@mui/material';

function ProjectDetails({openModal, setOpenModal}) {
    const project = openModal?.project

    const container ={
        width: "100%",
height: "100%",
position: "absolute",
top: "0",
left: "0",
backgroundColor: "#000000a7",
display: "flex",
alignItems: "top",
justifyContent: "center",
overflowY: "scroll",
transition: "all 0.5s ease"
    }

    const Wrapper = {
        maxWidth: "800px",
width: "100%",
borderRadius: "16px",
margin: "50px 12px",
height: "min-content",
backgroundColor: "#313866",
color: "white",
padding: "20px",
display: "flex",
flexDirection: "column",
position: "relative"
    }

    const Image = {
        width: "100%",
        objectFit: "cover",
        borderRadius: "12px",
        marginTop: "30px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)"    
    }

    const Title = {
        fontSize: "28px",
        fontWeight: "600",
        color: "white",
        margin: "8px 6px 0px 6px"
    }

    const Date = {
        fontSize: "16px",
        margin: "2px 6px",
        fontWeight: "400"
    }

    const Tags = {
        display: "flex",
        flexWrap: "wrap",
        margin: "8px 0px"
    }

    const singleTag = {
        fontSize: "14px",
        fontWeight: "400",
        margin: "4px",
        padding: "4px 8px",
        borderRadius: "8px",
        color: "#D4ADFC",
        border: "1px solid #D4ADFC"
    }

    const Desc = {
        fontSize: "16px",
        fontWeight: "400",
        margin: "8px 6px"
    }

    const ButtonGroup ={ 
        display: "flex",
        justifyContent: "flex-end",
        margin: "12px 0px",
        gap: "12px"
    }

  return (
    <Modal open={true} onClose={() => setOpenModal({state: false, project: null})}>
        <div style={container}>
                <div style={Wrapper}>
                    <svg style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }} onClick={() => setOpenModal({ state: false, project: null })}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>
                    <img style={Image} src={project?.image} />
                    <div style={Title} >{project?.title}</div>
                    <div style={Date} className='text-slate-400'>{project.date}</div>
                    <div style={Tags}>
                        {project?.tags.map((tag) => (
                            <div key={tag} style={singleTag}>{tag}</div>
                        ))}
                    </div>
                    <div style={Desc} className='text-slate-400'>{project?.description}</div>
                    <div style={ButtonGroup}>
                        <button className='border-2 border-FE7BE5 w-40 p-2 rounded-md text-FE7BE5 transition ease-in-out delay-150 hover:bg-FE7BE5 hover:text-white' dull target='new'><a href={project?.github}>View Code</a></button>
                        <button className='border-2 border-FE7BE5 w-40 p-2 rounded-md text-FE7BE5 transition ease-in-out delay-150 hover:bg-FE7BE5 hover:text-white' target='new'><a href={project?.webapp}>View Live App</a></button>
                    </div>
                </div>
            </div>
    </Modal>
  )
}

export default ProjectDetails