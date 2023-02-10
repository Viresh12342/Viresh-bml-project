import React, { useState } from "react";
import '../css/loginPage.css'
import githubLogo from '../image/githubLogo.png';
import googleLogo from '../image/googleLogo.png';

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({ name: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="main">
                <div className="sub">
                    <div className="firstbox">
                        <div className="col"></div>
                        <div className="heading">
                            <h1>LOG IN</h1>
                            {(error != "") ? (<div className="error">{error}</div>) : ""}
                        </div>

                        <div className="login">
                            <div className="alter">
                                <img src={githubLogo} className="logo" alt=""></img>
                                <h2 className="para">LOG IN WITH GITHUB</h2>
                            </div>
                            <div className="alt1">
                                <a className="alt">OR</a>
                            </div>
                            <div className="alter2">
                                <img src={googleLogo} className="logo" alt=""></img>
                                <h3 className="para2">LOG IN WITH GOOGLE</h3>
                            </div>
                            <div className="inputdiv">
                                <input type="text" placeholder="Username" className="inputbox" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                            </div>
                            <div className="inputdiv">
                                <input type="text" placeholder="Password" className="inputbox" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                            </div>
                            <div className="btn">
                                <button>LOG IN</button>
                            </div>
                            <div className="ref">
                                <a className="text">Forget Password?</a>
                                {/* <a className="text">Sign Up</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default LoginForm;