import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./header.css"

export default function Header() { 
    /*Menu toggle*/
    const[Toggle, showMenu]= useState(false);
  return (
    <header className='header'>
        <nav className="nav container">
            <Link to="/" className="nav__logo">Ricardo Lima</Link>
            <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <Link to="/" className="nav__link">
                            <i className="uil uil-home nav__icon"></i> Home
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/pokeapi" className="nav__link">
                            <i className="uil uil-nerd nav__icon"></i> Pokedex
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/joke" className="nav__link">
                            <i className="uil uil-comment nav__icon"></i> Joke
                        </Link>
                    </li>
                </ul>

                <i className="uil uil-times nav__close"onClick={()=> showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}
