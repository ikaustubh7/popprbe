import React from "react";
import Menuicon from "../assets/Menuicon";
import Getintouch from "../ui/getintouch/getintouch";
import styles from "./navbar.module.css";
import Menuiconanimate from "../ui/getintouch/menuicon/Menuiconanimate";
import NavbarMenuicon from "./NavbarMenuicon";

function Navbar() {
  return (
    <div className="font-sans flex  justify-between text-white px-8 py-5 items-center">
      <div>
        <h1 className={styles.title}>poppr</h1>
      </div>
      <div className="flex space-x-2 items-center">
        <div
          className={`border-[#a374ff] border-2 px-10 py-4 rounded-full bg-transparent max-h-14  content-center items-center ${styles.textborder}`}
        >
          <p className={styles.text}> Get in touch</p>
        </div>

        <div  className="    h-20">
        <NavbarMenuicon /> 

        
        





        </div>
        


      </div>
    </div>
  );
}

export default Navbar;
