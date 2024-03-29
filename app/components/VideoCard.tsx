'use client'
import { transform } from 'next/dist/build/swc';
import React from 'react'
import { useState , useEffect } from 'react'


function VideoCard() {

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isHover, setIsHover]=  useState(false);


  useEffect(()=>{


    const handleMouseMove = (event:MouseEvent) => {
      // 👇️ Get the mouse position relative to the element
  
      const container = document.getElementById('video-container');
      if (!container) return; // Ensure container exists

      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const centerY = containerRect.top + containerRect.height / 2;
      const width = containerRect.width;
      const height=containerRect.height;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      const offsetX = mouseX - centerX;
      const offsetY = mouseY - centerY;
  
      //setOffsetX(offsetX);
      //setOffsetY(offsetY);

      if( (Math.abs(offsetX)>0.5) || (Math.abs(offsetY)>0.5)){
        
      setOffsetX(offsetX /windowWidth);
      setOffsetY(offsetY/windowHeight);

      }
      else{
        setOffsetX((prevOffsetX) => offsetX / width);
        setOffsetY((prevOffsetY) => offsetY / height);
      }



    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  },[]);

  




  return (
    <>



      <div  className='z-10   h-[490.662px] w-[618.662px] rounded-[34.1333px] mt-[108px] ml-[442px]    overflow-hidden bg-slate-400 absolute opacity-100 ' 
       id="video-container"
      
      style={  {transform:`rotateX(${offsetX*45}deg) rotateY(${offsetY*45}deg)`}}

      onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}



      >
        <video src='https://player.vimeo.com/progressive_redirect/playback/725952347/rendition/1080p/file.mp4?loc=external&signature=57a7c3522f4c7c21f8123a490b67c603be4efaa02c9c70cfde99789ab3ea9a29' muted autoPlay loop playsInline 
        
        className='object-cover w-[100%] h-[100%] z-10'
        ></video>

        
        
      </div>
      <div className='bg-white'  >
      
       
      </div>

    </>
  )
}

export default VideoCard