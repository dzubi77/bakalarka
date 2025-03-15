import React, { useState, useEffect } from "react";
import '../styles/two_column_style.css'
import { PaginationPanel } from "../components/Pagination";

//funkcia pre vyfiltrovanie používateľov na základe filtrov
export const filterUsers = () => {

}
 
//reprezentuje panel pre filtráciu používateľov
export const UserFilter = () => {
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
                                    <td>Meno osoby</td>
                                    <td><input type="text"/></td>
                                </tr>
                                <tr>
                                    <td>ID osoby</td>
                                    <td><input type="text"/></td>
                                </tr>
                                <tr>
                                    <td>Typ osoby</td>
                                    <td>
                                        <select className="select-filter">
                                            <option value="all_users">Všetci</option>
                                            <option value="teacher">Učiteľ</option>
                                            <option value="student">Študent</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Stav</td>
                                    <td>
                                        <select className="select-filter">
                                            <option value="current">Aktuálny</option>
                                            <option value="finished">Ukončený</option>
                                            <option value="all">Všetci</option>
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
                                        <select className="my-select select-filter">
                                            <option value="name">mena</option>
                                            <option value="group">katedry/skupiny</option>
                                            <option value="degree">odboru</option>
                                        </select>
                                        <select className="select-filter">
                                            <option value="asc">vzostupne</option>
                                            <option value="desc">zostupne</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-primary my-btn" onClick={filterUsers}>
                            Vyhľadaj používateľov
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

//reprezentuje stránku so zoznamom používateľov
export const UserList = () => {
    return (
        <>
            <div className="main-container">
                <div className="filter-container">
                    <UserFilter />
                </div>
                <div className="list-container">
                    <PaginationPanel />
                    Here will be shown user list.
                    <PaginationPanel />
                </div>
            </div>
        </>
    );
}