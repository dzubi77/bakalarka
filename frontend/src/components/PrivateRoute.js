import React from "react";

//reprezentuje ochranu pred neoprávneným prístupom do systému z pohľadu frontendu
export const PrivateRoute = ({ children }) => {
    return localStorage.getItem('user') 
        ? children : <>
            Pre pristup do tejto casti je potrebne
            <a href="/">sa prihlásiť!</a> 
        </>;
}