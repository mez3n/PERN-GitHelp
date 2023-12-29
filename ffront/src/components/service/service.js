import React from 'react'
import "./css/service.css"
import { Link } from 'react-router-dom'
function Service(prop) {
  return (
   <Link to={`${prop.type}`} className='servicelink'> <div className="servicehandler">
   {prop.type}
 </div>
 </Link>
  )
}

export default Service
