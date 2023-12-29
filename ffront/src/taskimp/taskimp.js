import React from 'react'
import { Link } from 'react-router-dom';
import './taskspecification/csss/taskimp.css'
function Taskimp({ task }) {
  
    return (
        <div className='requestt'>
            <Link to={`profiletask/${task.task_id}`}>
          <div className='requestwrapperr'>
                <p>Your today task is {task.title} <span className='taskendtime'>due to {task.endtime}</span></p>
          </div>
          </Link>
        </div>
      )
}

export default Taskimp

