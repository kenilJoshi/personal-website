import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from '../../data/constant'
import ExperienceCard from '../Cards/ExperienceCard';

function Experience() {

    const fullSection = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    
    const timeLineSection = {
        width: "100%",
        maxWidth: "1000px",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px"
    }

  return (
    <div>
        <div className='mt-20' style={fullSection} id='experience'>
            <div  className="text-center">
                <h1 className='text-4xl font-bold text-white'>Experience</h1>
                <h2 className='text-xl text-slate-400 pt-3'>My work experience as a software engineer and working on different companies and projects.</h2>
            </div>
            <div style={timeLineSection}>
                <Timeline className='max-[600px]:items-center'>
                    {experiences.map((experience, index) => (
                        <TimelineItem key={experience.id}>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="secondary" />
                            {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <ExperienceCard experience={experience} />
                        </TimelineContent>
                    </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </div>
    </div>
  )
}

export default Experience