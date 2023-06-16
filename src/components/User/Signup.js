import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            console.log(error);
            alert("Error: " + error.message);
        });    
    }

    function handleName(event) {
        setName(event.target.value);
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }
    
    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Don't have an account? Sign Up here:</h2>
                <input className="signup-name" type="text"placeholder="name" value={name} onChange={handleName}></input>
                <input className="signup-email" type="email" placeholder="email" value={email} onChange={handleEmail}></input>
                <input className="signup-password" type="password" placeholder="password" value={password} onChange={handlePassword}></input>
                <button className="signup-button" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;