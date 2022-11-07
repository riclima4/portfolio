import React from 'react'
import { ReactComponent as SendIcon } from "../../assets/send.svg";

export default function Data() {
  return (
    <div className="home__data">
        <h1 className="home__title">Ricardo</h1>
        <h3 className="home__subtitle">Aluno DWM</h3>
        <p className="home__description">Sou o Ricardo Lima nº 19568 aluno do 2 ano de DWM, vim para este curso pelo gosto da programação, sou de Viana do Castelo e sou bastante dedicado no meu trabalho</p>
   
    <a href="#contacto" className="button button--flex">
        Saiba mais!
        <SendIcon/>
    </a>
    </div>
  )
}
