import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Pokeinfo = ({data}) => {
    const { id, name } = useParams();
    return (
        <>
        
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h3>{id}</h3>
            <h3>{name}</h3>
        </div>
        {
            
            (!data) ? "" : (
                <>
                    <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <div className="abilities">
                        {
                            data.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="base-stat">
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                    </>
                                )
                            })
                        }
                    </div>
                </>
            )
        }

        </>
     )
}
export default Pokeinfo