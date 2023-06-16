import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function HandleSubmit(event) {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            console.log(error);
            alert("Error: " + error.message);
        });    
    }

    function HandleName(event) {
        setName(event.target.value);
    }
    function HandleEmail(event) {
        setEmail(event.target.value);
    }
    function HandlePassword(event) {
        setPassword(event.target.value);
    }
    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={HandleSubmit}>
                <h2>Don't have an account? Sign Up here:</h2>
                <input className="signup-name" type="text"placeholder="name" value={name} onChange={HandleName}></input>
                <input className="signup-email" type="email" placeholder="email" value={email} onChange={HandleEmail}></input>
                <input className="signup-password" type="password" placeholder="password" value={password} onChange={HandlePassword}></input>
                <button className="signup-button" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;