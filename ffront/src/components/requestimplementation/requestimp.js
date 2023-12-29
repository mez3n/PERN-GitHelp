import React from 'react'
import './css/requestimp.css'
import { Link } from 'react-router-dom';
function Requestimp({ request }) {
  console.log("*********************");
    console.log(request);
  return (
    <div className='requestt'>
        <Link to={`profilerequest/${request.requestid}`}>
      <div className='requestwrapperr'>
            <p>You have request from {request.username}</p>
      </div>
      </Link>
    </div>
  )
}

export default Requestimp
