import React from 'react'
import styles from './navbarmenuicon.module.css'
import Menuicon from "../assets/Menuicon";


function NavbarMenuicon() {
  return (
    <div className='flex-col  place-items-center bg-lime-500'>
     <div className={`rounded-full   mt-4 p-5 bg-[#a374ff] ${styles.Menuicon}`}>
      <Menuicon />



</div>

<div className={styles.bglayercontainer}>
<span className={styles.bglayer1} >1</span>
<span className={styles.bglayer2} >2</span>
<span className={styles.bglayer3} >3</span>
</div>

    
    </div>
  )
}

export default NavbarMenuicon