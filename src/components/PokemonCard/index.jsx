import React, { useEffect, useState } from 'react'
import pikachu from "../../pokemon.png"
import "./PokemonCard.scss"
import { pokemonApi } from "utils/api";
import { Spin } from "components"

const PokemonCard = ({ card }) => {
    const [pokemonTypes, setPokemonTypes] = useState([])

    useEffect(() => {
        pokemonApi.index(card.url).then(({data}) => setPokemonTypes(data.types));
    }, []);

    if(!pokemonTypes.length) {
        return <Spin/>;
    }

    return (
        <div className="pokemons__list-card">
            <div className="pokemons__list-card-img">
                <img src={pikachu} alt="pokemon"></img>
            </div>
            <div className="pokemons__list-card-info">
                <h3 className="pokemons__list-card-info-name" >{card.name}</h3>
                <div className="pokemons__list-card-info-types" >
                    {pokemonTypes.map((pokemonType) => (
                        <p key={pokemonType.slot} >{pokemonType.type.name}</p>
                    ))}
                </div>
            </div>
        </div>        
    )
}

export default PokemonCard;
