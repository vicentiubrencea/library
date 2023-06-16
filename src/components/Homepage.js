import React from "react";
import HeaderMain from "./HeaderMain";

function Homepage({onSignOut}) {
    return (
        <div>   
            <HeaderMain onSignOut={onSignOut}/>
            <h1>Home page</h1>
        </div> 
    )
}

export default Homepage;