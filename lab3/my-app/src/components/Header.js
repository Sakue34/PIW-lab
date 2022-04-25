import React from 'react'
import './Header.css';
import logo from '../images/binder-logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <NavLink to="/"><img className='header__logo' src={logo} alt='tinder logo'/></NavLink>
            <NavLink to="/addstudent"><div className='header__item'>Dodaj swoje ogłoszenie</div></NavLink>
            <NavLink to="/findgroup"><div className='header__item'>Szukaj grupy</div></NavLink>
        </div>
    );
}

export default Header;