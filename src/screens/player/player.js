import React, { useEffect, useState } from 'react'
import "./player.css"
import SongCard from "../../components/sidebar/songcard/songCard"
import  Queue from "../../components/sidebar/queue/queue"
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify';
import AudioPlayer from '../../components/sidebar/audioplayer/audioPlayer'
import Widgets from '../../components/sidebar/widgets/widgets'
export default function Player() {
  const location =useLocation();
  const [tracks,setTracks]=useState([]);
  const [currentTrack,setCurrentTrack]=useState({});
  const [currentIndex,setCurrentIndex]=useState(0);
  
  useEffect(()=>{
    if(location.state){
      apiClient.get("playlists/"+location.state?.id+"/tracks")
      .then((res)=>{
        setTracks(res.data.items);
        setCurrentTrack(res.data?.items[0]?.track);
      }); 
    }
  },[location.state]);

  useEffect(() => {
    const currentTrack = tracks[currentIndex]?.track;
    if (currentTrack) {
      setCurrentTrack(currentTrack);
    }
  }, [currentIndex, tracks]);
  
  return (
    <div  className='screen-container flex'>
      <div className='left-player-body'>
        <AudioPlayer 
        currentTrack={currentTrack} 
        total={tracks}
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id}/>
      </div>
      <div className='right-player-body'>
        <SongCard album={currentTrack?.album}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
      </div>
    </div>
  )
}
