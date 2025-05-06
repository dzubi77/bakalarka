import React, { useState } from "react";
import { useUser } from '../service/UserProvider';
import { Navigate } from 'react-router-dom';

import '../styles/one_column_style.css';
import '../styles/login_style.css';

//reprezentuje stránku s prihlasovacím formulárom
export const LoginPage = () => {
    const { user, login } = useUser();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        login(formData);    
    };

    if (user) {
        return <Navigate to='/my_profile' />;
    }

    return (
        <>
            <div className="main-container">
                <div className="login-content-container">
                    <p><strong>Pre pokračovanie sa najprv prosím prihláste: </strong></p>
                    <form className="personal-info-container" onSubmit={handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Používateľské meno: </label></td>
                                    <td><input type="text" name="username" value={formData.username} onChange={handleChange} /></td>
                                </tr>
                                <tr>
                                    <td><label>Heslo: </label></td>
                                    <td><input type="password" name="password" value={formData.password} onChange={handleChange} /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="login-form-buttons">
                            <button className="btn btn-primary" type="submit">Prihlásiť sa</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}