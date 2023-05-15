import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import SidebarButton from './sidebarButton'
import 'react-icons/md';

import {MdFavorite} from "react-icons/md"
import {FaGripfire,FaPlay} from "react-icons/fa"
import {IoLibrary} from "react-icons/io5"
import { MdSpaceDashboard } from 'react-icons/md'
import {FaSignOutAlt} from "react-icons/fa"
import apiClient from '../../spotify';
export default function Sidebar() {

  const [image,setImage]=useState(
    'https://th.bing.com/th/id/OIP.WQvPJdjEpvh8OTXB-NBfJwHaHw?pid=ImgDet&rs=1'
  );
  useEffect(()=>{
    apiClient.get("me").then(response=>{setImage(response.data.images[0].url);})
  },[])

  return (
    <div className='sidebar-container'>
        <img src={image} className='profile-img' alt='profile'/>
        <div>
            <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
            <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
            <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
            <SidebarButton title="Favorites" to="/favourites" icon={<MdFavorite/>}/>
            <SidebarButton title="Library" to="/" icon={<IoLibrary/>}/>
        </div>
        <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt/>}/>
    </div>
  )
}
