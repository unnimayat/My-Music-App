import React from 'react'
import "./controls.css"
import {IconContext} from "react-icons"
import {FaPause} from 'react-icons/fa'
import {IoShuffleOutline,IoPlaySkipBack,IoPlaySkipForward,IoRepeat,IoPlay} from 'react-icons/io5'
export default function Contols({isPlaying,setIsPlaying,handleNext,handlePrev}) {
  const handleShuffle=()=>{

  }
  const handlePlayPause=()=>{
    setIsPlaying(!isPlaying);
  }
  const handleRepeat=()=>{

  }
  return (  
    <IconContext.Provider value={{size:"35px",color:"#c4dbe3"}}>
      <div className='controls-wrapper'>
        <div className='action-btn' onClick={handleShuffle}>
          <IoShuffleOutline/>
        </div>
        <div className='ction-btn' onClick={handlePrev}>
          <IoPlaySkipBack/>
        </div>
        <div className={isPlaying?"play-pause-btn active":"play-pause-btn"} onClick={handlePlayPause}>
          {isPlaying? <FaPause/>:<IoPlay/>}
        </div>
        <div className='action-btn' onClick={handleNext}>
          <IoPlaySkipForward/>
        </div>
        <div className='action-btn' onClick={handleRepeat}>
          <IoRepeat/>
        </div>
      </div>
    </IconContext.Provider>

  )
}
