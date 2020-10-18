import React from 'react';
import fire from '../config/fire';

const home = () => {
    return (
        <div>
            <h1>You are logged in...</h1>
            <button onClick={clickedLogout}>Logout</button>
        </div>
    )
}

const clickedLogout = () => {
    fire.auth().signOut();
}

export default home;