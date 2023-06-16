import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function HandleSubmit(event) {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .catch(error => alert("Email or password incorrect"));
    }
    function HandleEmail(event) {
        setEmail(event.target.value);
    }
    function HandlePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div>
            <div className="signin-header">
                <img src={process.env.PUBLIC_URL + '/logo.png'} className="header-image"/>
                <p>WELLCOME</p>
            </div>
            <div className="signin-container">
                <form className="signin-form" onSubmit={HandleSubmit}>
                    <h2>Sign In</h2>
                    <input className="signin-email" type="email" placeholder="email" value={email} onChange={HandleEmail}></input>
                    <input className="signin-password" type="password" placeholder="password" value={password} onChange={HandlePassword}></input>
                    <button className="signin-button" type="submit" >Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Signin;