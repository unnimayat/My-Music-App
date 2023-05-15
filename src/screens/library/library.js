import React, { useEffect, useState } from 'react'
import APIKit from "../../spotify"
import { useNavigate } from 'react-router-dom';
import "./library.css"
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai';

export default function Library() {

  const [playlist,setPlaylist]=useState(null);

  useEffect(()=>{
    APIKit.get("me/playlists").then(function(response){
      setPlaylist(response.data.items);
      console.log(response.data.items);
    });
  },[]);
  
  const navigate=useNavigate();
  const playPlaylist=(id)=>{
    navigate("/player",{state:{id: id}});
  };
  return (
    <div className='screen-container'>
      <div className='library-body'>
      {playlist?.map((playlist) => (
        <div className='playlist-card' key={playlist.id} onClick={()=>playPlaylist(playlist.id)}>
          <img src={playlist.images[0].url} className='playlist-image' alt='Playlist-Art'/>
          <p className='playlist-title'>{playlist.name}</p>
          <p className='playlist-subtitle'>{playlist.tracks.total} Songs</p>
          <div className='playlist-fade'>
            <IconContext.Provider value={{size:"50px",color:"#cbb7e8d4"}}>
              <AiFillPlayCircle/>
            </IconContext.Provider>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  )
}
