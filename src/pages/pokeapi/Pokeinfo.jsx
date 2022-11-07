import React from 'react'
import './pokeapi.css'

export default function Pokeinfo({data}) { 
    const backgrounds = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    }
    const defaultBackground = 'black';
  return (
    
    <>
    {
        (!data)?(<h2>Selecione um pokemon</h2>):(
            <div className="pokemon-card-info">
                <h2>{data.name}</h2>
                <img src={data.sprites.other.dream_world.front_default} alt="pokemon"/>
                <div className="type">
                {
                data.types.map((poke)=>{
                    return(
                        <div key={data.id +'-'+poke.type.url} className="group" style = {{background: backgrounds[poke.type.name] || defaultBackground }}>{poke.type.name}</div>
                    )
                })
                }
                </div>
            </div>
        )
    }
    
    </>
  )
}
