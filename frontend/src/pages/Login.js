import React from "react";

//funkcia pre prihlásenie sa do systému (overenie voci ldap alebo db na strane backendu)
const handleLogin = () => {

}

//reprezentuje stránku s prihlasovacím formulárom
export const LoginPage = () => {
    return (
        <>
            <div className="login-page-main">
                <div className="login-form-content">
                    <p>Pre pokračovanie sa najprv prosím prihláste: </p>
                    <form>
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