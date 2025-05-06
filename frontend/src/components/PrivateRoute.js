import React from "react";

//reprezentuje ochranu pred neoprávneným prístupom do systému z pohľadu frontendu
export const PrivateRoute = ({ children }) => {
    return localStorage.getItem('user') 
        ? children : <>
            Pre prístup do tejto časti je potrebné
            <a href="/">sa prihlásiť!</a> 
        </>;
}