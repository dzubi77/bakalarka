import React from "react";

export const LoginPage = () => {
    return (
        <>
            <div className="login-page-main">
                <div className="login-form-content">
                    <p>Pre pokračovanie sa najprv prosím prihláste: </p>
                    <form>
                        <label>Používateľské meno: </label>
                        <input type="text" />

                        <label>Heslo: </label>
                        <input type="password"/>
                    </form>
                    <div className="login-form-buttons">
                        <button className="btn btin-primary">Prihlásiť sa</button>
                        <a>Zabudol som heslo{/*link na obnovenie LDAP konta*/}</a>
                    </div>
                </div>
            </div>
        </>
    );
}