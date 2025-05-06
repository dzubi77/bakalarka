import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/my_thesis.css'

//reprezentuje podstránku s priradenou témou (ak existuje priradená téma)
export const MyThesis = () => {
    const [workData, setWorkData] = useState(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));

        if (userData && userData.work) {
            setWorkData(userData.work); 
        }
    }, []);

    if (!workData) {
        return <p>Loading...</p>;
    }

    const { titleSK, titleEN, description, degree, leader } = workData;

    return (
        <>
            <div className="main-container">
                <div className="content-container">
                    <div className="content-inner-container">
                        <h5>Zadanie práce</h5>
                        <div className="work-details">
                            <h6>Informácie o práci</h6>
                            <p><strong>Názov práce (SK):</strong> {titleSK}</p>
                            <p><strong>Názov práce (EN):</strong> {titleEN}</p>
                            <p><strong>Popis práce:</strong> {description}</p>
                            <p><strong>Stupeň:</strong> {degree}</p>

                            <h6>Informácie o vedúcom</h6>
                            <p><strong>Meno a priezvisko:</strong> <Link to={`/users/${leader.id}`}> {leader.degree1} {leader.name} {leader.surname}, {leader.degree2}</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}