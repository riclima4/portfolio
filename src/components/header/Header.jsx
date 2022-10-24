import React, { useState } from 'react'
import "./header.css"

export default function Header() { 
    /*Menu toggle*/
    const[Toggle, showMenu]= useState(false);
  return (
    <header className='header'>
        <nav className="nav container">
            <a href="" className="nav__logo">Ricardo Lima</a>
            <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <i className="uil uil-home nav__icon"></i> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#api1" className="nav__link">
                            <i className="uil uil-nerd nav__icon"></i> Joke
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#pokeapi2" className="nav__link">
                            <i className="uil uil-comment nav__icon"></i> Quote
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contacto" className="nav__link">
                            <i className="uil uil-nerd nav__icon"></i> Contact
                        </a>
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
