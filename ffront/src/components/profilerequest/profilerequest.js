import React from 'react'
import {useParams} from 'react-router-dom'
import Headersection from '../../navbar/navbar';
import {useNavigate} from 'react-router-dom'
import './css/profilerequest.css'
function Profilerequest() {
    const Navigate = useNavigate();
    const { id, requestid } = useParams();
    function handleassignrequest(e,postmanid){
        //post to the backend the postmanid,requestid
        Navigate(-1);
    }
    const request={
        username:"khater",
        caption:"jdsfkljldk",
        phone:"01068071299"
    }
    //get by id of the organization
    const postmans=[
        {
            id:1,
        username:"mohamed",
        numberoftasks:3,
    },
        {
            id:2,
        username:"khaled",
        numberoftasks:3,
    },
]
  return (
    <div>
        <Headersection></Headersection>
       <div className='profilerequestwrapperrr'>
       <div>
            <p style={{    fontSize: "50px"}}>Request specifications</p>
            <p>{request.username}</p>
            <p>{request.caption}</p>
            <p>{request.phone}</p>
        </div>
        <div>
            <p style={{    fontSize: "50px"}}>available postmans</p>
            <div className='postmanwrapper'>
            {postmans.map((postman)=>(

                 <div className='eachpostman'>
                    <div>
                    <p>{postman.username}</p>
                    <p>has {postman.numberoftasks} tasks</p>
                    </div>
                   <div>
                   <button className='assignbutton' onClick={()=>handleassignrequest(postman.id)}>assign</button>
                    </div>
                </div>
            ))}
                            </div>
        </div>
       </div>
    </div>
  )
}

export default Profilerequest
