import React from 'react'
import "./css/task.css"
import {useParams} from "react-router-dom"
import Headersection from '../../navbar/navbar'
function Task() {
    //get the tasks by representative id and patient id 
    const {patientid,id}=useParams()
    const tasks=[
        {
            starttime:"20",
            endtime:"20",
            thetask:"mosfjd", 
            status:"done"
        },
        {
            starttime:"20",
            endtime:"20",
            thetask:"mosfjd", 
            status:"undone"
        },
        {
            starttime:"20",
            endtime:"20",
            thetask:"mosfjd", 
            status:"undone"
        },
        {
            starttime:"20",
            endtime:"20",
            thetask:"mosfjd", 
            status:"undone"
        },
    ]
    const patient={
        id:33,
        patientname:"mohamed",
        patientnumber:"0100",
    }
    const availabletasks=[
        {
            id:12,
            thetask:"mosfjd"
        },
        {
            id:39,
            thetask:"mosfjd"
        },
    ]
    function handleassignrequest()
    {
        //post to the bask end the task id , patient id 
    }
  return (
    <>
    <Headersection></Headersection>
    <div className='patienttaskwrappper'>
     <div>
     <h1 className='patientspecifications'>
        patient specifications
      </h1>
      <div>
        <div>
        {
            patient.patientname
        }
        </div>
       <div>
       {
            patient.patientnumber
        }
       </div>
      </div>
     </div>

      <div className='taskrightside'>
      <div>
      <h1 className='patienttaskss'>
        tasks
      </h1>
      </div>
      <div className='taskdetails'>
      {tasks.map((task, index) => (
        <div key={index} className={`taskwrapper ${task.status === 'done' ? 'done' : 'undone'}`}>
          <div className='thetask'>{task.thetask}</div>
          <div className='starttime'>Start Time: {task.starttime}</div>
          <div className='endtime'>End Time: {task.endtime}</div>
          <div className='status'>{task.status === 'done' ? 'Done' : 'Undone'}</div>
        </div>
      ))}
    </div>
    <div>
            <h1 style={{    fontSize: "50h1" ,textAlign:"center", fontSize:"50px"}}>available tasks</h1>
            <div className='taskwrappeerrr'>
            {availabletasks.map((t)=>(

                 <div className='eachavailabletask'>
                    <div>
                        <p>{availabletasks[0].thetask}</p>
                    </div>
                   <div>
                   <button className='assignbutton' onClick={()=>handleassignrequest()}>assign</button>
                    </div>
                </div>
            ))}
                            </div>
        </div>
    
    </div>
    </div>
    </>
  )
}

export default Task
