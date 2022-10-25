import React from 'react'
import "./home.css"
import Social from "./Social";
import  Data  from "./Data";
import Footer from '../footer/Footer';
import Contact from '../contact/Contact';

export default function Home() {
  return (
    <>
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social></Social>
                <div className="home__img"></div>
                <Data></Data>
            </div>
        </div>
    </section>
    <Contact/>
    <Footer/>
    </>
  )
}
