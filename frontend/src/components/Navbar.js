import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from '../service/UserProvider';

//reprezentuje hlavný navigačný panel aplikácie
export const Navbar = () => {
    const { user, logout } = useUser();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = () => {
        logout();
    }

    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    return (
        <>
            <nav className="navbar navbar-expand-lg my-navbar">
                <div className="container-fluid">
                    <a className="nav-item btn" onClick={() => {
                        if (user) {
                            handleLogout();
                        } else {
                            navigate('/');
                        }
                    }}>{user ? "Odhlásiť sa" : "Domov"}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/documents">Dokumenty</a>
                            </li>
                            <li
                                className={`nav-item dropdown ${dropdownOpen ? "show" : ""}`}
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Témy
                                </a>
                                <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                                    {role === 'student' && (
                                        <li>
                                            <a className="dropdown-item" href="/my_thesis">Priradená téma</a>
                                        </li>
                                    )}
                                    <li><a className="dropdown-item" href="/thesises">Vyhľadaj tému</a></li>
                                    {role === 'student' && (
                                        <li>
                                            <a className="dropdown-item" href="/export_files">Odovzdanie súborov</a>
                                        </li>
                                    )}
                                    {role === 'student' && (
                                        <li>
                                            <a className="dropdown-item" href="/">Informácie ku štátnej skúške</a>
                                        </li>
                                    )}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/users">Používatelia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/finished_thesises">Vyhľadaj prácu</a>
                            </li>
                            {user && <li className="nav-item">
                                <a className="nav-link active" href="/my_profile">Môj profil</a>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}