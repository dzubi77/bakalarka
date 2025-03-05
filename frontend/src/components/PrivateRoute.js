import React from "react";

//reprezentuje ochranu pred neoprávneným prístupom do systému z pohľadu frontendu
export const PrivateRoute = ({ children }) => {
    return localStorage.getItem('token') 
        ? children : <>
            Unauthorized!
        </>;
}