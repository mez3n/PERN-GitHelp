import React, { useEffect, useState } from "react";
import "./css/rightbar.css";
import mo from "../imgs/mo.jpg";
import { Link, useParams } from "react-router-dom";
import Requestimp from "../components/requestimplementation/requestimp";
import Taskimp from "../taskimp/taskimp";
import Admin from "../components/admin/admin";

function Rightbar() {
  const { id } = useParams();
  let [user, setuser] = useState(null);
  let [requests, setrequests] = useState([]);
  const [patients, setpatients] = useState([]);
  const [taskss, settaskss] = useState([]);
  //get the user from the db by giving it the id in the local storage
  const uid = localStorage.getItem("id");
  const type = localStorage.getItem("type");
  console.log(uid);
  useEffect(async () => {
    console.log("Inside useEffect");
    if (uid) {
      await fetch(`http://localhost:8080/users/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("User data:", data);
          setuser(data);
        })
        .catch((error) => console.error(error));
      if (type == "organization") {
        await fetch(`http://localhost:8080/orders/${uid}`)
          .then((res) => res.json())
          .then((data) => setrequests(data))
          .catch((error) => console.error(error));
      }
      if (type == "representative") {
        fetch(`http://localhost:8080/repPatientGroup/30`)
          .then((res) => res.json())
          .then((data) => setpatients(data))
          .catch((error) => console.error(error));
      }
      if (type == "patient") {
        fetch(`http://localhost:8080/PatientHasTask/${uid}`)
          .then((res) => res.json())
          .then((data) => settaskss(data))
          .catch((error) => console.error(error));
      }
    }
  }, [uid]); // Added uid as a dependency

  //console.log(Array.isArray(requests));
  if (!Array.isArray(requests)) {
    requests = [requests];
  }
  return (
    <div className="rightbar">
      <div className="rightbarwrabber">
        <div className="wrabberprofileimg">
          <img src={mo} alt="" className="profileimg" />
        </div>
      </div>
      <p className="rightbarbio">sdfjlksdflk</p>
      {user && user.id === id && user.type === "organization" && (
        <div className="etlopbutton">
          <Link to={"Requests"}>
            <button>etlop postman</button>
          </Link>
        </div>
      )}
      {Array.isArray(requests) &&
        user &&
        user.type === "organization" &&
        requests.map((request) => (
          <Requestimp key={request.requestid} request={request} />
        ))}

      {user && user.id === id && user.type === "representative" && (
        <div className="patienttask">
          {patients.map((patient) => (
            <Link key={patient.patient_id} to={`task/${patient.patient_id}`}>
              <div className="patientwrapper">
                <p>{patient.patientname}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
      {user &&
        user.type === "patient" &&
        taskss.map((task, index) => <Taskimp key={index} task={task} />)}
      <Admin></Admin>
    </div>
  );
}

export default Rightbar;
