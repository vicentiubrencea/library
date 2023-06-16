import React from "react";

function HeaderMain({onSignOut}) {

    return (
        <div className="header-container">
            <img src={process.env.PUBLIC_URL + '/logo.png'} className="header-image"/>
            <h3 className="header-quote">“If you don’t like to read, you haven’t found the right book.” J.K. Rowling</h3>
            <button type="button" className="header-button" onClick={onSignOut}>SIGN OUT</button>
        </div>
    )
}
export default HeaderMain;