import React from 'react'
import Headersection from '../../navbar/navbar'
import "./css/taskspecification.css"
import {useParams} from 'react-router-dom'
function Taskspecification() {
    function handletaskdone()
    {
        //update the task
    }
    const {id,taskid}= useParams();
    //get the task from the db by id of the patient and the taskid
    const task={
        title:"jkfld",
        caption:"jfsdl",
        endtime:"jfkld",
    }
  return (
    
    <div>
        <Headersection></Headersection>
      <div className='taskspecificationnn'>
            <h1>Your task today</h1>
            <div className='taskimplementation'>
     <div>
     <div className='taskcaption'>{task.title}</div>
     <div className='taskcaptionnn'>sjdflksdjfklsdjflkdsjfljsdfljsdflkjdsflkjsdlkfj</div>
      <div className='endtime'>{task.endtime}</div>
     </div>
      <button className='doneButton' onClick={handletaskdone}>Done</button>
    </div>
      </div>
    </div>
  )
}

export default Taskspecification
