import React from "react";
import '../styles/one_column_style.css'

const getUserData = () => {

}

//reprezentuje stránku s informáciami o aktuálne prihlásenom používateľovi
export const MyProfile = () => {
    getUserData();
    return (
        <>
            <div className="main-container">
                <div className="content-container">
                    <div className="personal-info-container">
                        <p>Meno a priezvisko</p>
                        <hr></hr>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Študijná skupina</td>
                                    <td>data</td>
                                </tr>
                                <tr>
                                    <td>Ročník</td>
                                    <td>data</td>
                                </tr>
                                <tr>
                                    <td>Osobné číslo</td>
                                    <td>data</td>
                                </tr>
                                <tr>
                                    <td>Študijný odbor</td>
                                    <td>data</td>
                                </tr>
                                <tr>
                                    <td>Priradená téma</td>
                                    <td>data</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="contact-container">

                    </div>
                </div>
            </div>
        </>
    );
}