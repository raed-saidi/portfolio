import React from 'react';
import icon from '/src/icon.js'

export default function  Home(){
    const icons=icon.map((current,index)=>{
        return (
           
                <img className="icon" src={current.url} />
            
        )
    })
   return (

    <section  id='HOME' className='home' >
        <img className='mybimogi' src="/src/avatar.png" />
        <h1 className='home-title'>I do code and <br />make content about it!</h1>
        <p>I am a seasoned full-stack software engineer with over 
    8 years of professional experience, specializing in backend development. 
    My expertise lies in crafting robust and scalable SaaS-based 
    architectures on the Amazon AWS platform.</p>
        <div className='home-btns'>
            <button className='contact-btn'>Get In Touch</button>
            <button  className='cv-btn'>Download CV</button>
        
        
        </div>
        <h2>EXPERIENCE WITH</h2>
        <div className='language-icons'>
            {icons}

            </div>


    </section>
        
    )
    
}