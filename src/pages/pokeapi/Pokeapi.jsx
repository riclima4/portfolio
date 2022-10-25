import React,{useState,useEffect} from 'react'
import Footer from '../../components/footer/Footer'
import './pokeapi.css'
import axios from 'axios'

export default function pokeapi() {
  // const url = 'https://official-joke-api.appspot.com/random_joke'
  

  // const [joke, setJoke] = useState([]);

  // const getData = async () =>{
  //   const res = await axios.get(url)
  //   if(!res) return
  //   console.log(res.data)
  //   setJoke(res.data)
  // }

  // useEffect(()=>{
  //   getData();
  // },[])


  return (
    <>
    {/* <section className="home section" id="home">
        <div className="joke__container container grid">
          <h1 className="section__title">Pokedex!</h1>
          <p className='joke__description' key={joke.id}>{joke.setup} - {joke.punchline}</p>
          <button className='button centerText' onClick={()=>{getData()}}>Another one</button>
        </div>
        
    </section> */}
    <Footer/>
    </>
  )
}
