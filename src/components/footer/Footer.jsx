import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Trabalho de Aplicação Web</h1>
            <ul className="footer__list">
                <li>
                    <a href="/home" className="footer__link">Home</a>
                </li>
                <li>
                    <a href="/pokeapi" className="footer__link">Pokedex</a>
                </li>
                <li>
                    <a href="/joke" className="footer__link">Joke</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.instagram.com/ricardo_lima.4/"rel="noreferrer" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/ricardo-lima-635642183/"rel="noreferrer" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/riclima4" rel="noreferrer" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>
            </div>
            <span className='footer__copy'>&#169; Todos os direitos reservados</span>
        </div>
    </footer>
  )
}
