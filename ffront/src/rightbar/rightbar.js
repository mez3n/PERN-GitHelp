import React from 'react'
import './css/rightbar.css'
import mo from'../imgs/mo.jpg'
import { Link, useParams } from 'react-router-dom'
import Requestimp from '../components/requestimplementation/requestimp';
import Taskimp from '../taskimp/taskimp';
function Rightbar() {
  const {id}=useParams();
  //get the user from the db by give it the id in the local storage
  const users=[{
    id:1,
    bio:"dksjfl",
    type:"representative"
  }]
  const requests=[
    {
      requestid:5,
    username:"mohamed",
    caption:"blablabla"
  },
    {
      requestid:6,
    username:"khaled",
    caption:"blablabla"
  },
]
//get the patient of a representative from the database by id 
const patients=[
  {
    patientname:"mohamed",
    patientnumber:"01068071299"
  },
  {
    patientid:10,
    patientname:"mo",
    patientnumber:"01068071299"
  },
]
//get from db by id 
const taskss=[
  {
    title:"jkfld",
    caption:"jfsdl",
    endtime:"jfkld",
  },
  {
    title:"jkfld",
    caption:"jfsdl",
    endtime:"jfkld",
  },
]
  return (
    <div className='rightbar'>
      <div className='rightbarwrabber'>
        <div className='wrabberprofileimg'><img src={mo} alt='' className='profileimg'>
        </img></div>
      </div>
      <p className='rightbarbio'>sdfjlksdflk</p>
      {users[0].id==id&&users[0].type=="organization"&&<div className='etlopbutton'><Link to={"Requests"}><button>etlop postman</button></Link></div>}
      {users[0].type=="organization"&&requests.map((request)=>(
        <Requestimp request={request} ></Requestimp>
      ))}

      {users[0].id==id&&users[0].type=="representative"&&<div className='patienttask'>
        {
          patients.map((patient)=>(
            <Link to={`task/${patient.patientid}`}>
      <div className='patientwrapper'>
            <p>{patient.patientname}</p>
      </div>
      </Link>
          ))
        }
    </div>}
    {users[0].type=="patient"&&taskss.map((task)=>(
        <Taskimp task={task}></Taskimp>
      ))}

    </div>
  )
}

export default Rightbar
