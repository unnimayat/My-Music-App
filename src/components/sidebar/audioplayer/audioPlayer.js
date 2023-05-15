import React, { useState } from 'react'
import "./audioplayer.css"
import ProgressCircle from './progressCircle'
import WaveAnimation from './waveanimation';
import Contols from './contols';
export default function AudioPlayer({currentTrack,currentIndex,setCurrentIndex,total}) {
  
  const [isPlaying,setIsPlaying]=useState(false);
  const [trackProgress,setTrackProgress]=useState(0);
  var audioSrc=total[currentIndex]?.track.preview_url;
  
  
  const artists=[];
  currentTrack?.album?.artists.forEach((artist)=>{
    artists.push(artist.name);
  });

  return (
    <div className='player-body flex'>
      <div className='player-left-body'>
        <ProgressCircle percentage={75} isPlaying={true} image={currentTrack?.album?.images[0]?.url} size={300} color="#c96b5a"/>
      </div>
      <div className='player-right-body flex'>
        <p className='song-title'>{currentTrack.name}</p>
        <p className='song-artist'>{artists.join(" | ")}</p>
        <div className='player-right-bottom flex'>
          <div className='song-duration flex'>
            <p className='duration'>0.01</p>
            <WaveAnimation isPlaying={true}/>
            <p className='duration'>0.30</p>
          </div>
          <Contols
            // isPlaying={isPlaying}
            // setIsPlaying={setIsPlaying}
            // handleNext={handleNext}
            // handlePrev={handlePrev}
            // total={total}
          />
        </div>
      </div>
    </div>
  )
}
