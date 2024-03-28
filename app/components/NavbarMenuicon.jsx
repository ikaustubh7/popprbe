'use client'
import React from 'react'
import styles from './navbarmenuicon.module.css'
import Menuicon from "../assets/Menuicon";
import { useState } from "react";
import path from 'path';





function NavbarMenuicon() {
  const [isHover,setIsHover]=useState(false)

  return (

    <div className='absolute  flex-col place-items-center   bg-[#201c1c]'>
     <div className={`rounded-full place-items-center   -z-1   pt-3  ${styles.Menuicon}`}  onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}    
     
     

     >
     
      <div className=' h-[54px] w-[54px] bg-[#a374ff] rounded-full relative overflow-hidden  ' 
        
      
      >
        
           <span className=' z-10 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] '  ><Menuicon /></span> 

           <div className={styles.bglayercontainer}
  

  >
  <span className={`${styles.bglayer1}`} 
  style={isHover ? {transform: 'translateY(-54px)' ,  transition: 'transform 1.3s cubic-bezier(.19,1,.22,1), opacity .3s linear'  } : {}} 
  
  
  ></span>
  
  <span className={`${styles.bglayer2}`} 
  style={isHover ? {transform: 'translateY(-54px)' ,  transition: 'transform 1.3s cubic-bezier(.19,1,.22,1), opacity .3s linear', transitionDelay:'0.1s' } : {}} 
  
  ></span>
  
  <span className={`${styles.bglayer3}`} 
  style={isHover ? {transform: 'translateY(-54px)' ,  transition: 'transform 1.3s cubic-bezier(.19,1,.22,1), opacity .3s linear' , transitionDelay:'0.2s'  } : {}} 
  
  
  ></span>
  
  
  
  </div>








            </div>
      



</div>








    
    </div>
    
  )
}

export default NavbarMenuicon