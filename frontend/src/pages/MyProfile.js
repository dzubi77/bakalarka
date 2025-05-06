import React, { useState, useEffect } from "react";
import '../styles/one_column_style.css'

//reprezentuje stránku s informáciami o aktuálne prihlásenom používateľovi
export const MyProfile = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const role = localStorage.getItem('role');
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        const fetchFavouriteThemes = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/interests/s/${user.id}`);
                if (!response.ok) throw new Error('Failed to fetch themes');
                const data = await response.json();
                setThemes(data);
            } catch (error) {
                console.error('Error fetching themes:', error);
            }
        };

        if (role === 'student') {
            fetchFavouriteThemes();
        }
    }, [role, user.id]);


    return (
        <div className="main-container">
            <div className="content-container">
                <div className="personal-info-container">
                    <p>{user.name + " " + user.surname}</p>
                    <hr />
                    <table>
                        <tbody>
                        {role === 'student' && (
                                <>
                                    <tr>
                                        <td>Študijná skupina</td>
                                        <td>{user.studyGroup}</td>
                                    </tr>
                                    <tr>
                                        <td>Ročník</td>
                                        <td>{user.yearOfStudy}</td>
                                    </tr>
                                    <tr>
                                        <td>Študijný odbor</td>
                                        <td>{user.studyField}</td>
                                    </tr>
                                    <tr>
                                        <td>Priradená téma</td>
                                        <td>
                                            {user.work ? (
                                                <a href="/my_thesis">{user.work.titleSK}</a>
                                            ) : (
                                                "Žiadna"
                                            )}
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: '#f9f9f9', color: '#333' }}>
                                        <td colSpan="2"><strong>Obľúbené témy</strong></td>
                                    </tr>
                                    {themes.length > 0 ? (
                                        themes.map((theme, index) => (
                                            <tr key={index}>
                                                <td colSpan="2">
                                                    <a href={`/thesises/${theme.id}`}>{theme.titleSK}</a>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr><td colSpan="2">Žiadne obľúbené témy</td></tr>
                                    )}
                                </>
                            )}

                            {role === 'teacher' && (
                                <>
                                    <tr>
                                        <td>Osobné číslo</td>
                                        <td>{user.personalNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>Katedra</td>
                                        <td>{user.department}</td>
                                    </tr>
                                    <tr style={{ backgroundColor: '#f9f9f9', color: '#333' }}>
                                        <td colSpan="2"><strong>Vedúci prác</strong></td>
                                    </tr>
                                    {user.worksLed?.length > 0 ? (
                                        user.worksLed.map((work, index) => (
                                            <tr key={index}>
                                                <td>{work.titleSK}</td>
                                                <td>
                                                    Študent: {work.studentName} {work.studentSurname}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr><td colSpan="2">Žiadne vedené práce</td></tr>
                                    )}

                                    <tr style={{ backgroundColor: '#f9f9f9', color: '#333' }}>
                                        <td colSpan="2"><strong>Školiteľ prác</strong></td>
                                    </tr>
                                    {user.worksTutored?.length > 0 ? (
                                        user.worksTutored.map((work, index) => (
                                            <tr key={index}>
                                                <td>{work.titleSK}</td>
                                                <td>
                                                    Študent: {work.studentName} {work.studentSurname}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr><td colSpan="2">Žiadne školené práce</td></tr>
                                    )}

                                    <tr style={{ backgroundColor: '#f9f9f9', color: '#333' }}>
                                        <td colSpan="2"><strong>Vedúci tém</strong></td>
                                    </tr>
                                    {user.themesLed?.length > 0 ? (
                                        user.themesLed.map((theme, index) => (
                                            <tr key={index}>
                                                <td colSpan="2">{theme.titleSK}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr><td colSpan="2">Žiadne vedené témy</td></tr>
                                    )}

                                    <tr style={{ backgroundColor: '#f9f9f9', color: '#333' }}>
                                        <td colSpan="2"><strong>Školiteľ tém</strong></td>
                                    </tr>
                                    {user.themesTutored?.length > 0 ? (
                                        user.themesTutored.map((theme, index) => (
                                            <tr key={index}>
                                                <td colSpan="2">{theme.titleSK}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr><td colSpan="2">Žiadne školené témy</td></tr>
                                    )}
                                </>
                            )}

                            {role === 'extern' && (
                                <>
                                    <tr>
                                        <td>Firma</td>
                                        <td>{user.company}</td>
                                    </tr>
                                    <tr>
                                        <td>Adresa firmy</td>
                                        <td>{user.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{user.email}</td>
                                    </tr>
                                    <tr style={{ backgroundColor: '#f9f9f9', color: '#333' }}>
                                        <td colSpan="2"><strong>Vedúci prác</strong></td>
                                    </tr>
                                    {user.worksLed?.length > 0 ? (
                                        user.worksLed.map((work, index) => (
                                            <tr key={index}>
                                                <td>{work.titleSK}</td>
                                                <td>
                                                    Študent: {work.studentName} {work.studentSurname}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr><td colSpan="2">Žiadne vedené práce</td></tr>
                                    )}
                                    <tr style={{ backgroundColor: '#f9f9f9', color: '#333' }}>
                                        <td colSpan="2"><strong>Vedúci tém</strong></td>
                                    </tr>
                                    {user.themesLed?.length > 0 ? (
                                        user.themesLed.map((theme, index) => (
                                            <tr key={index}>
                                                <td colSpan="2">{theme.titleSK}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr><td colSpan="2">Žiadne vedené témy</td></tr>
                                    )}
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="contact-container">
                    {/* Kontaktné údaje, TODO mimo BP */}
                </div>
            </div>
        </div>
    );
}