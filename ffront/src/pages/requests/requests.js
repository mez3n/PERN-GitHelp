import React from 'react'
import "./css/requests.css"
import Headersection from '../../navbar/navbar'
import Service from '../../components/service/service'
import {Outlet,useParams} from "react-router-dom"
function Requests() {
  const {id}=useParams();
  return (
    <div>
      <Headersection></Headersection>
     <div className='requestwrapper'>
     <h3 className='servicerequest'>choose service</h3>
     </div>
     <div className='serviceswrappers'>
       <Service type={"money"} ></Service> {/* from the data base */}
       <Service type={"blood"} ></Service> {/* from the data base */}
       <Service type={"clothes" }></Service> {/* from the data base */}
     </div>
     <Outlet></Outlet>
    </div>
  )
}

export default Requests
