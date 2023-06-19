import React, { useState } from 'react'
import Spinner from './Spinner.gif'
import { Link } from 'react-router-dom';



function Card({result, loading, BtnChange, value}) {
  return (
    <>
    <div className='container'>
       
          <div className='search'>
              <input type='text'  onChange={e => BtnChange(e.target.value)} placeholder='Enter Pokémon name or ID'/>
          </div>
            
         <div className='item'>
          {loading?<img width='50px' src={Spinner} alt='Loading'/>:
            result.map((item)=>(
            <Link to={`pokemon/${item.id}/${item.name}`}>
            <div className='card' key={item.id} onClick={()=>infoPokemon(item)}>
                 <h2>{item.id}</h2>
                 <div className='PokeData'>
                      <img className='PokeImg' src={item.sprites.front_default} alt='pokemon image'/>
                      <h3 className='PokeName'>{item.name}</h3> 
                 </div>
            </div>
            </Link> 
            
            ))
          }
          </div> 
    </div> 
   </>      
            
)
}
export default Card
