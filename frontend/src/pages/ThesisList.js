import React, { useState, useEffect } from "react";
import '../styles/two_column_style.css'

//funkcia pre zobrazenie prác na základe filtrov 
export const filterThesises = () => {

}

//reprezentuje panel pre filtráciu záverečných prác
export const ThesisFilter = ({ isFinished }) => {
    const [showFilters, setShowFilters] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 1024);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="thesis-filter-container">
                {isSmallScreen && (
                    <div className="filter-button-container">
                        <button 
                            className="btn btn-primary filter-toggle-btn" 
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            {showFilters ? "Zavrieť filtre" : "Filtre"}
                        </button> 
                    </div>
                )}

                {(showFilters || !isSmallScreen) && (
                    <div className="filter-content-container">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Názov témy</td>
                                    <td><input type="text"/></td>
                                </tr>
                                <tr>
                                    <td>Meno vedúceho alebo tútora</td>
                                    <td><input type="text"/></td>
                                </tr>
                                <tr>
                                    <td>Predmet alebo obsah</td>
                                    <td><input type="text"/></td>
                                </tr>
                                {isFinished && (
                                    <tr>
                                        <td>Študent</td>
                                        <td><input type="text"/></td>
                                    </tr>
                                )} 
                                <tr>
                                    <td>Stupeň</td>
                                    <td>
                                        <select className="select-filter">
                                            <option value="none"></option>
                                            <option value="bc">Bakalár</option>
                                            <option value="ing">Inžinier</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Katedra</td>
                                    <td>
                                        <select className="select-filter">
                                            <option value="none"></option>
                                            <option value="kis">KIS</option>
                                            <option value="ki">KI</option>
                                            <option value="kmnt">KMNT</option>
                                            <option value="kmme">KMME</option>
                                            <option value="kmmoa">KMMOA</option>
                                            <option value="kst">KST</option>
                                            <option value="ktk">KTK</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Stav práce</td>
                                    <td>
                                        <select className="select-filter">
                                            <option value="not_assigned">Nezadané</option>
                                            <option value="assigned">Priradené</option>
                                            <option value="finished">Skončené</option>
                                            <option value="none"></option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Jazyk práce</td>
                                    <td>
                                        <select className="select-filter">
                                            <option value="sk">slovenský</option>
                                            <option value="en">anglický</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Počet tém na stránku</td>
                                    <td>
                                        <select className="select-filter">
                                            <option value="five-on-page">5</option>
                                            <option value="ten-on-page">10</option>
                                            <option value="twenty-on-page">20</option>
                                            <option value="thirty-on-page">30</option>
                                            <option value="forty-on-page">40</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trieď podľa</td>
                                    <td>
                                        <select className="my-select">
                                            <option value="title">Názov</option>
                                            <option value="teacher">Učiteľ</option>
                                            <option value="degree">Stupeň</option>
                                            <option value="department">Katedra</option>
                                        </select>
                                        <select>
                                            <option value="asc">Vzostupne</option>
                                            <option value="desc">Zostupne</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-primary my-btn" onClick={filterThesises}>
                            Vyhľadaj témy
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

//reprezentuje stránku so zoznamom záverečných prác
export const ThesisList = ({isFinished}) => {
    return (
        <>
            <div className="main-container">
                <div className="filter-container">
                    <ThesisFilter isFinished={isFinished}/>
                </div>
                <div className="list-container">
                    Here will be displayed thesises //with or without filters.
                </div>
            </div>
        </>
    );
}