import React from 'react'
import './css/searchgroups.css'
import Group from '../../group/Group'
import { data } from '../../data/data'
function Searchgroups() {
  return (
    <div className='searchgroup'>
        <div className='searchgroupwrapper'>
        {data.map((u,index) => (
            <Group key={index} user={u} />
          ))}
        </div>
      
    </div>
  )
}

export default Searchgroups
