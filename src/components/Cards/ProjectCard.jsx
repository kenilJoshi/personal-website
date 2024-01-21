import React from 'react'
// import styled from 'styled-components'

// const Button = styled.button`
//     display: none;
//     width: 100%;
//     padding: 10px;
//     background-color: ${({ theme }) => theme.white};
//     color: ${({ theme }) => theme.text_black};
//     font-size: 14px;
//     font-weight: 700;
//     border: none;
//     border-radius: 10px;
//     cursor: pointer;
//     transition: all 0.8s ease-in-out;
// `

// const Image = styled.img`
//     width: 100%;
//     height: 180px;
//     background-color: ${({ theme }) => theme.white};
//     border-radius: 10px;
//     box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
// `

// const Tags = styled.div`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     flex-wrap: wrap;
//     gap: 8px;
//     margin-top: 4px;
// `

// const Tag = styled.span`
//     font-size: 12px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.primary};
//     background-color: ${({ theme }) => theme.primary + 15};
//     padding: 2px 8px;
//     border-radius: 10px;
// `

// const Details = styled.div`
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     gap: 0px;
//     padding: 0px 2px;
// `
// const Title = styled.div`
//     font-size: 20px;
//     font-weight: 600;
//     color: ${({ theme }) => theme.text_secondary};
//     overflow: hidden;
//     display: -webkit-box;
//     max-width: 100%;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
//     text-overflow: ellipsis;
// `

// const Date = styled.div`
//     font-size: 12px;
//     margin-left: 2px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.text_secondary + 80};
//     @media only screen and (max-width: 768px){
//         font-size: 10px;
//     }
// `



// const Members = styled.div`
//     display: flex;
//     align-items: center;
//     padding-left: 10px;
// `
// const Avatar = styled.img`
//     width: 38px;
//     height: 38px;
//     border-radius: 50%;
//     margin-left: -10px;
//     background-color: ${({ theme }) => theme.white};
//     box-shadow: 0 0 10px rgba(0,0,0,0.2);
//     border: 3px solid ${({ theme }) => theme.card};
// `

function ProjectCard({project,setOpenModal}) {

    const Card = {
    width: "330px",
    height: "490px",
    backgroundColor: "#313866",
    cursor: "pointer",
    borderRadius: "10px",
    overflow: "hidden",
    padding: "26px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    transition: "all 0.5s ease-in-out",
    // &:hover {
    //     transform: translateY(-10px);
    //     box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    //     filter: brightness(1.1);
    // }
    // &:hover ${Button} {
    //     display: block;
    // }
    }

    const image = {
        width: "100%",
        height: "180px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 0 16px 2px rgba(0,0,0,0.3)",
    }

    const tagStyle = {
        fontsize: "12px",
    fontWeight: "400",
    color: "#D4ADFC",
    border: "1px solid #D4ADFC",
    padding: "2px 8px",
    borderRadius: "10px"
    }
    const tags = {
        width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "4px",
    }

    const details ={
        width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "0px",
    padding: "0px 2px"
    }

    const title = {
        fontSize: "20px",
    fontWeight: "600",
    color: "white",
    overflow: "hidden",
    display: "-webkit-box",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis"
    }

    const description = {
        fontWeight: "400",
    overflow: "hidden",
    marginTop: "8px",
    maxWidth: "100%",
    textOverflow: "ellipsis",
    height: "98px"

    }
  return (
    // <div style={Card} className='hover:shadow-lg' onClick={() => setOpenModal({state: true, project: project})}>
    //         <img style={image} />
            // <div style={tags}>
            //     {project.tags?.map((tag, index) => (
            //     <div style={tag}>{tag}</div>
            //     ))}
            // </div>
            // <div style={details}>
            //     <div style={title} className="line-clamp-2">{project.title}</div>
            //     <div style={description} classname="line-clamp-3">{project.description}</div>
            // </div>
    //         {/* <Button>View Project</Button> */}
    //     </div>

    <div style={Card} className='shadow-md	hover:shadow-xl' onClick={() => setOpenModal({state: true, project: project})}>
         <img style={image} src={project.image}/>
         <div style={tags}>
                {project.tags.map((tag) => (
                    <div key={tag} style={tagStyle}>{tag}</div>
                ))}
            </div>
            <div style={details}>
                <div style={title} className="line-clamp-2">{project.title}</div>
                <div className='text-slate-400 line-clamp-2' style={description}>{project.description}</div>
            </div>
        </div>
  )
}

export default ProjectCard