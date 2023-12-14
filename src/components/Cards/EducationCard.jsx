import React from 'react'

function EducationCard({education}) {
    const description = {
        width: "100%",
        fontSize: "15px",
        fontWeight: "400",
        marginBottom: "10px"
    }

    const span = {
        overflow: "hidden",
        display: "-webkit-box",
        maxWidth: "100%",
        textOverflow: "ellipsis",
    }

    const card = {
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        padding: "12px 16px",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease-in-out",
        border: "0.1px solid #306EE8",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px"
    }

    const top = {
        width: "100%",
        display: "flex",
        gap: "12px"
    }

    const Image = {
        height: "50px",
        backgroundColor: "#000",
        borderRadius: "10px",
        marginTop: "4px"
    }

    const body = {
        width: "100%",
        display: "flex",
        flexDirection: "column" 
    }

    const role = {
        fontSize: "18px",
        fontWeight: "600"
    }

    const company = {
        fontSize: "14px",
        fontWeight: "500"
    }

    const date = {
        fontSize: "12px",
        fontWeight: "400"
    }

    const grade = { 
        fontSize: "14px",
        fontWeight: "500"
    }

  return (
    <div className='max-[600px]:w-72 w-[40rem] max-[600px]:gap-2 gap-3 max-[600px]:p-2.5' style={card}>
        <div style={top}>
            <img src={education.img} style={Image} />
            <div style={body}>
                <div className='text-slate-400' style={role}>{education.school}</div>
                <div className='text-slate-400' style={company}>{education.degree}</div>
                <div className='text-slate-400' style={date}>{education.date}</div>
            </div>
        </div>
        <div style={grade} className='text-slate-400'><b>Grade: </b>{education.grade}</div>
            
        <div style={description} className='text-slate-400'> 
            <div style={span}>{education.desc}</div>
        </div>
    </div>
  )
}

export default EducationCard