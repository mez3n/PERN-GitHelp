import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './css/register.css'
function Register() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
    setvalues((prev) => ({
      ...prev,
      type: option, // Set the type in the values state
    }));
  };
  
  const Navigate = useNavigate();
  const [values, setvalues] = useState({
    email: "",
    password: "",
    fullname:"",
    username:"",
    phonenumber:"",
    bio:"",
    type:"",
    location:"",
  });
  console.log(values);
  const [error, seterror] = useState("");
  const handleinput = (e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    // const jsonData = JSON.stringify(values);
    // axios
    //   .post("http://localhost:3002/register", jsonData, {
    //     headers: {
    //       "Content-Typex": "application/json", // Set the content type to JSON
    //     },
    //   })
    //   .then((res) => {
    //     Navigate("/login");
    //   })
    //   .catch((err) => {
    //     let error;
    //     let message;
    // Array.isArray(err.response.data)?
    //      {message} = err.response.data[0]:{error}=err.response.data;
    //   error?seterror(error):seterror(message);
    //   });
  };
      return (
        <body className="forloggin">
   <div class="login-box">
        <div class="login-header">
            <header>Sign Up</header>
        </div>
        <div class="input-box">
        <input
        type="text"
        name="fullname"
        className="input-field"
        id="fullname"
        placeholder="Fullname:"
        onChange={handleinput}
      ></input>
        </div>
        <div class="input-box">
          <input
          type="email"
          name="email"
          id="email"
          className="input-field"
          placeholder="Email:"
          onChange={handleinput}
        ></input>
        </div>
        <div className="input-box">
        <input
        type="password"
        name="password"
        id="password"
        className="input-field"
        placeholder="password:"
        onChange={handleinput}
      ></input>
        </div>
        <div className="input-box">
        <input
        type="text"
        name="username"
        id="username"
        className="input-field"
        placeholder="username:"
        onChange={handleinput}
      ></input>
        </div>
        <div className="input-box">
        <input
        type="text"
        name="bio"
        id="bio"
        className="input-field"
        placeholder="bio:"
        onChange={handleinput}
      ></input>
        <input
        type="tel"
        name="phonenumber"
        id="phonenumber"
        className="input-field"
        placeholder="phonenumber:"
        onChange={handleinput}
      ></input>
        </div>
        <div className="input-box">
        </div>
        <p className="msg">{error}</p>
        <div className="">
        <div>
      <h1>Who you are</h1>
      <label>
        <input
          type="checkbox"
          value="patient"
          checked={selectedOption === 'patient'}
          onChange={() => handleCheckboxChange('patient')}
          required
        />
        Patient
      </label>

      <label>
        <input
          type="checkbox"
          value="organization"
          checked={selectedOption === 'organization'}
          onChange={() => handleCheckboxChange('organization')}
          required
        />
        Organization
      </label>

      <label>
        <input
          type="checkbox"
          value="volunteer"
          checked={selectedOption === 'volunteer'}
          onChange={() => handleCheckboxChange('volunteer')}
          required
        />
        Volunteer
      </label>

      {selectedOption === 'organization' && <div> <input
        type="text"
        name="location"
        id="location"
        className="input-field"
        placeholder="location:"
        onChange={handleinput}
      ></input>
      </div>}
    </div>
          
        </div>
        <div class="input-submit">
        <button type="submit" class="submit-btn" id="submit" onClick={handlesubmit}></button>
            <label for="submit">Sign up</label>
        </div>
        
        <div class="sign-up-link">
            <p>Have account?<Link to="/login" className="link">Sign in</Link></p>
        </div>
    </div>
    </body>
  );
}

export default Register;
