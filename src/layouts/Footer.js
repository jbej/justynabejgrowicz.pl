import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Footer.css';
const Footer = () => {
    return (
        <div className="color">
            <h6>Website designed and coded by: Justyna Bejgrowicz 2019</h6>
            <Route path='/' exact render={(props) => (
                <p>You're on <span>about me</span></p>
            )
            } />
            <Route path='/:page' exact render={(props) => {
                return (
                    <>
                        <p>You're on <span>{props.match.params.page}</span></p>
                    </>
                )
            }} />
            <Route path='/:page/:idProduct' exact render={(props) => {
                return (
                    <>
                        <p>You're on <span>{props.match.params.idProduct}</span></p>
                        <p>You're on <span>{props.match.url}</span></p>
                    </>
                )
            }} />
        </div>

    );
}

export default Footer;