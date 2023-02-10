import React, {useState} from "react";
import { useNavigate } from "react-router";
import Footbar from "./Footbar";
import Nav from "./Nav";
import "./css/Signup.css";




function Signup(){
    const navigate = useNavigate();
    const [firstName , setfirstName] = useState('');
    const [lastName , setlastName] = useState('');
    const[ userName , setuserName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [phoneno , setPhoneNo] = useState('');

    const handleFirstChange =(e)=>{
        setfirstName(e.target.value);
      }
    const handleLastChange =(e)=>{
        setlastName(e.target.value);
      }
   const handleUserChange =(e)=>{
        setuserName(e.target.value);
      }

    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
      }
      
      const handlePasswordChange =(e)=>{
        setPassword(e.target.value);
      }
       
      const handleConfirmPasswordChange =(e)=>{
        setConfirmPassword(e.target.value);
      }

      const handlePhoneNoChange = (e) =>{
        setPhoneNo(e.target.value);
      }

      const handleSubmit=(e)=>{
        if(password!=confirmPassword)
        {   
          alert("password Not Match");
        }
        else{
          let  item ={firstName ,lastName ,userName, email ,password ,phoneno };
                       console.warn(item);

        }
        e.preventDefault();
      }
    return(
        <div>
        <Nav/>
        <form onSubmit={(e) => {handleSubmit(e)}} >
            <div className="main-box">
                <h1 className="signup-text">SIGN UP</h1>
                <div className="input-box">
                    <div className="input-names">
                        <input className="input-text" id="firstName" placeholder="First Name*"/>
                        <input className="input-text" id="lastName" placeholder="Last Name*"/>
                    </div>
                    <div className="email-box">
                        <input id="email" className="input-email" placeholder="Enter Email*"/>
                    </div>
                    <div className="password-box">
                        <input id="password" className="input-password" placeholder="Create Password*"/>
                    </div>
                    <div className="confirm-box">
                        <input id="confirmPassword" className="input-confirm" placeholder="Confirm Password*"/>
                    </div>
                    <div className="phone-box">
                        <input id="phoneNumber" className="input-phone" type="value" placeholder="Enter Mobile Number"/>
                    </div>
                    <div className="div-checkbox">
                        <input type="checkbox" className="text-checkbox"/>
                        <h1 className="term-text">By signing up, you agree to Photo’s <span className="span-1">Terms of Service</span> and <span className="span-1">Privacy Policy</span></h1>
                    </div>
                </div>
                <div>
                    
                </div>
                <button id="registerButton" className="register-button" onClick={()=>navigate("/")}>Register</button>
            </div>
        </form>
        <Footbar/>
        </div>

    )
}

export default Signup;