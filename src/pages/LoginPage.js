import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
    return (
        <div>
            <label htmlFor="">Podaj login<input type="text"></input></label>
            <br />
            <label htmlFor="" >Podaj hasło<input type="password"></input></label>
            <br />
            <button>Zaloguj</button>
        </div>
    );
}

export default LoginPage;