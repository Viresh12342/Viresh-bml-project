import React, {useState, useEffect} from "react";

import LoginForm from "./login-form";

function UserLogin(){
    const admin = {
        name: "Viresh Gulia",
        password: "Viru1234"
    }

    const [user, setUser] = useState({name:"", password:""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if(details.password == admin.password){
            console.log("Logged in");
            setUser({
                name: details.name,
                password: details.password
            });
        } else{
            console.log("Details do not match");
            setError("Details do not match");
        }    
    }

    const Logout = () => {
        setUser({name:"", password:""});
    }

    return(
        <div className="log">
            {(user.password != "") ? (
                <div>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )}
        </div>
    )
}
export default UserLogin;