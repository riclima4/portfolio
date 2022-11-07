import React,{useState,useEffect} from 'react'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'
import './joke.css'
import axios from 'axios'

export default function Joke() {
  const url = 'https://official-joke-api.appspot.com/random_joke'
  const [joke, setJoke] = useState([]);

  const getData = async () =>{
    const res = await axios.get(url)
    if(!res) return
    console.log(res.data)
    setJoke(res.data)
  }

  useEffect(()=>{
    getData();
  },[])


  return (
    <>
    <section className="home section" id="home">
        <div className="joke__container container grid">
          <h1 className="section__title">Uma piada!</h1>
          <p className='joke__description' key={joke.id}>{joke.setup} - {joke.punchline}</p>
          <button className='button centerText' onClick={()=>{getData()}}>Outra piada</button>
        </div>
        
    </section>
    <Contact/>
    <Footer/>
    </>
  )
}
