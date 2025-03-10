import React from "react";
import '../styles/one_column_style.css'
import '../styles/login_style.css'

//funkcia pre prihlásenie sa do systému (overenie voci ldap alebo db na strane backendu)
const handleLogin = () => {

}

//reprezentuje stránku s prihlasovacím formulárom
export const LoginPage = () => {
    return (
        <>
            <div className="main-container">
                <div className="content-container">
                    <p><strong>Pre pokračovanie sa najprv prosím prihláste: </strong></p>
                    <form className="personal-info-container">
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Používateľské meno: </label></td>
                                    <td><input type="text" /></td>
                                </tr>
                                <tr>
                                    <td><label>Heslo: </label></td>
                                    <td><input type="password" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <div className="login-form-buttons">
                        <button className="btn btn-primary" onClick={handleLogin}>Prihlásiť sa</button>
                        <a href="/">Zabudol som heslo{/*link na obnovenie hesla*/}</a>
                    </div>
                </div>
            </div>
        </>
    );
}