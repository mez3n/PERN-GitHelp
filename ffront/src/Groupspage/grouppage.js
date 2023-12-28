import React from 'react'
import Headersection from '../navbar/navbar'
import Sidebar from '../sidebar/sidebar'
import Searchgroups from '../components/searchgroups/searchgroups'
import './css/grouppage.css'
function GroupPage() {
  return (
    <div>
    <Headersection></Headersection>
    <div className='grouppage'>
    <Sidebar></Sidebar>
    <Searchgroups></Searchgroups>
    </div>
    </div>
  )
}

export default GroupPage
