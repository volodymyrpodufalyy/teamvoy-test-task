import React, { useState, useEffect } from 'react';
import { pokemonApi } from "utils/api";
import "./PokemonInfo.scss";
import { Spin } from "components"

const PokemonInfo = ({ card, renderImage, convertToUpperCase, onClose }) => {
    const [pokemonInfo, setPokemonInfo] = useState();

    const generateIndex = (id) => {
        if(id >= 10 && id < 100) return `#0${id}`
        if(id >= 100) {
            return `#${id}`
        }
        return `#00${id}`
    }

  

    useEffect(() => {
        pokemonApi.getPokemonData(card.url).then(({data}) => setPokemonInfo(data));
    }, [renderImage]);

    if(!pokemonInfo) {
        return <Spin/>;
    }

    return (
        <div className="pokemon__info" >
            <div className="pokemon__info-img">
                <button onClick={onClose} >X</button>
                <img src={renderImage(pokemonInfo.id)} alt="pokemon"></img>
            </div>
            <div className="pokemons__info-content">
                <h3 className="pokemon__info-content-name" >{convertToUpperCase(card.name) + generateIndex(pokemonInfo.id)}</h3>
                <div className="pokemons__info-content-table" >
                    <table className="pokemon__table" >
                        <thead>
                            <tr>
                                <th>Types</th>
                                <th>Attack</th>
                                <th>Defense</th>
                                <th>HP</th>
                                <th>SP Attack</th>
                                <th>SP Defense</th>
                                <th>Speed</th>
                                <th>Weight</th>
                                <th>Total Moves</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{pokemonInfo.types.map((item, i) => {
                                    if (pokemonInfo.types.length === i + 1 && pokemonInfo.types.length !== 1)
                                    return <span key={item.slot} > {', ' + convertToUpperCase(item.type.name)} </span>
                                    return <span key={item.slot} > {convertToUpperCase(item.type.name)} </span>
                                })}</td>
                                {pokemonInfo.stats.map(item => (
                                    <td key={item.stat.url} >{item.base_stat}</td>
                                ))}
                                <td>{pokemonInfo.weight}</td>
                                <td>{pokemonInfo.moves.length}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PokemonInfo;
