import React from 'react';
import projectData from '/src/projectData.js'


export default function Projects (){
    const projects=projectData.map((current,index)=>{
        return (
           
                <div className="project">
                    
                    <img className="project-image" src={current.url} />
                    <div className='project-description'>
                        <h3 className='project-title'>{current.title}</h3>
                        
                    </div>
                    
                </div>
            
        
    )})
    return (
        <section id='PROJECTS' className='projects'>
            <h2>PROJECTS</h2>
            <div className='projectList'>
            {projects}
            </div>
            

        </section>
    )

}