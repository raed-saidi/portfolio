import React from 'react';

export default function  Navbar(){
   
    return (
        <nav className='navbar' >

        
            <h1 className='prt-name'>Portfolio</h1>
            <ul className="navbar-elements">
                <li> 
                    <a  href='#HOME'>Home</a>
                </li>   
                <li> 
                    <a  href='#PROJECTS'> Projects</a>
                </li>
                <li> 
                    <a  href='#EXPERIENCE'> Experience</a>
                </li>
                <li> 
                    <a  href='#CONTACT'> Contact</a>
                </li>
              
            </ul>

            <div>
          
    
            </div>
        </nav>
        
    )
    
}