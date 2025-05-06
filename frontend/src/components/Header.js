import React from "react";
import logo from '../img/FRI_H_T_sk_biele.png';
import '../styles/style.css';

//reprezentuje hlavičku stránky (s logom fakulty)
export const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="logo-container">
                    <a href="https://www.fri.uniza.sk">
                        <img src={logo} alt="logo_fri_biele"/>
                    </a>
                </div>
            </div>
        </>
    );
}