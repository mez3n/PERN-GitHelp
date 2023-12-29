import React from 'react';
import { useParams } from 'react-router-dom';
import Headersection from "../navbar/navbar";
import Sidebar from '../sidebar/sidebar';
import Feed from '../feed/feed';
import './css/profile.css';
import Rightbar from '../rightbar/rightbar';

function Profile() {
  const type=localStorage.getItem("type");
  return (
    <div>
      <Headersection></Headersection>
      <div className='profilecontainer'>

        {type!="representative"&&type!="admin"&&<Sidebar></Sidebar>}
        {type!="representative"&&type!="admin"&&<Feed></Feed>}
        <Rightbar></Rightbar>
      </div>
    </div>
  );
}

export default Profile;