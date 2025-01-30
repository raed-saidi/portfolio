import React from 'react';
import experienceData from '/src/experienceData.js'


export default function Projects (){
    const experience=experienceData.map((current,index)=>{
        return (
           
                <div className="experince-list">
                    
                    
                    <div className='experienceheader'>
                       
                        <img className="project-image" src={current.url} />
                        <h3>{current.title}</h3>
                    </div>
                    <p>{current.description}</p>
                    
                </div>
            
        
    )})
    return (
        <section  id='EXPERIENCE' className='experience'>
            <h2>EXPERIENCE</h2>
            <div className='experience-list-container'>
            {experience}
            </div>
            

        </section>
    )

}