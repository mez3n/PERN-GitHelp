import React from 'react'
import './css/sidebar.css'
import Group from '../group/Group.js'
import { data } from '../data/data.js'
export default function Sidebar() {
  return (
    <div className='sidebar'>
     <p className='sidebargroup'>Groups</p>
    <div className='sidebarwrabber'>
    <ul className="sidebarFriendList">
          {data.map((u,index) => (
            <Group key={index} user={u} />
          ))}
        </ul>
    </div>
    </div>
  )
}
