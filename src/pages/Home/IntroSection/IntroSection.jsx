import { NavLink } from 'react-router-dom'
import './IntroSection.css'
import { Fade } from 'react-reveal'

export const IntroSection =()=>{
    return(

        <div className="container">
        

        
        <div className='IntroSection'>
            <div className="introSection-left">

               <Fade bottom  delay={50} ><h1>Speak , Write , <span>Succeed</span></h1></Fade> 
                <Fade bottom delay={100}><p>Lektore provides assimilation pathways for safe migration to English Speaking countries by using language, professional & social tools for migrating professionals, students, Business people and refugees. It also provides elocution & language to anyone wanting to seak better as well as gives actors access to native speakers of languages they need to sound like. Creating a process that converts existing education and professions to transferrable skills that  makes them a credit to their host <br /> countries. </p></Fade>
               <Fade bottom delay={800}> <div className="introSectionLinks">
                    <NavLink to='/'>Check Courses</NavLink>
                    <NavLink to='/'>Learn More</NavLink>
                </div>
                </Fade>
                
            </div>
            <div className="introSection-right">
                
            </div>
        </div>
        
        </div>
    )
}