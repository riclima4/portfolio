import React from 'react'
import './contact.css'
import { ReactComponent as SendIcon } from "../../assets/send.svg";

export default function Contact() {
  return (
   <section className="contacto section" id='contacto'>
    <h2 className="section__title">Precisa de algo?</h2>
    <span className="section__subtitle">Contacte</span>

    <div className="contact__container container grid">
        <div className="contact__content">
            <h3 className="contact__title">Diz-me alguma coisa</h3>
            <div className="contact__info">
                <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>
                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">ricardo.lima@ipvc.pt</span>
                    <a href="mailto:ricardo.lima@ipvc.pt" className="contact__button">Escreva algo <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                </div>
                <div className="contact__card">
                    <i className="bx bxl-whatsapp contact__card-icon"></i>
                    <h3 className="contact__card-title">Whatsapp</h3>
                    <span className="contact__card-data">961746212</span>
                    <a href="https://api.whatsapp.com/send?phone=961746212&text=Hello, more information pls!" className="contact__button">Escreva algo <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                </div>
            </div>
        </div>
        <div className="contact__content">
            <h3 className="contact__title">Fala comigo!</h3>

            <form className="contact__form">
                <div className="contact__form-div">
                    <label className="contact__form-tag">Nome</label>
                    <input type="text" name='name' className='contact__form-input' placeholder='Insere o nome' />
                </div>
                <div className="contact__form-div">
                    <label className="contact__form-tag">Email</label>
                    <input type="email" name='email' className='contact__form-input' placeholder='Insere o email' />
                </div>
                <div className="contact__form-div contact__form-area">
                    <label className="contact__form-tag">Mensagem</label>
                    <textarea name="project" cols="30" rows="10" className='contact__form-input'placeholder='Escreve a tua menssagem'></textarea>
                </div>

                <button className="button button--flex">
                    Enviar Mensagem
                    <SendIcon/>
                </button>
            </form>
        </div>
    </div>
   </section>
  )
}
