import React, { useState, useEffect } from "react";
import "./App.css";
import Signin from "./components/User/Signin";
import Signup from "./components/User/Signup";
import Homepage from "./components/Homepage";
import { auth } from "./firebase";

function App() {
    const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });  
    return () => unsubscribe();
  }, []);
  
  function handleSignOut() {
    auth.signOut();
    setUser(null);
  }

  return (
    <div className="main-container">
      {user ? null : <Signin />}
      {user ? null : <Signup />}
      {user ? <Homepage onSignOut={handleSignOut} />: null}
    </div>
  );
}

export default App;

