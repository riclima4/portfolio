import React,{useState,useEffect} from 'react'
import Footer from '../../components/footer/Footer'
import './pokeapi.css'
import axios from 'axios'
import Card from './Card'
import Pokeinfo from './Pokeinfo'

export default function Pokeapi() {
  const link = 'https://pokeapi.co/api/v2/pokemon/'
  const [pokeData, setPokeData]=useState([]);
  const [loading, setLoading]=useState(true);
  const [url,setUrl] = useState(link);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  
  const getData = async () =>{
    setLoading(true)
    const res = await axios.get(url)
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    getPokemon(res.data.results)
    setLoading(false)
    
  }
  const getPokemon = async (res)=>{
    res.map(async(item)=>{
      const result = await axios.get(item.url)
      setPokeData(state=>{
        state=[...state,result.data]
        state.sort((a,b)=>a.id>b.id?1:-1)
        return state;
      })

    })
  }
 useEffect(()=>{
   getData();
 },[url])


  return (
    <>
    <section className="home section">
        <div className="poke__container container">
          <h1 className="section__title">Pokedex!</h1>
            <Pokeinfo data={pokeDex} />
          <div className="pokemons">
            <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>           
            <div className="btn-group">
              { prevUrl && <button onClick={()=>{
                setPokeData([])
                setUrl(prevUrl)
              }}>PREVIOUS</button>}
              {nextUrl && <button onClick={()=>{
                setPokeData([])
                setUrl(nextUrl)
              }}>NEXT</button>}
            </div>
          </div>
        </div> 
    </section>
    <Footer/>
    </>
  )
}
