import headerLogo from "../img/header/header-logo.svg";
import React from 'react'

export default function Header() {
return (
    <header className="header">
        <a href="#" target="_blank" className="header__link">
            <img className="header__logo" src={headerLogo} alt="Место Россия"/>
        </a>
    </header>
)
}