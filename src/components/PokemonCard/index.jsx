import "./PokemonCard.scss"
import React, { useEffect, useState } from 'react';
import generateColor from "../../utils/generateColor";
import { pokemonApi } from "utils/api";
import { Spin } from "components"


const PokemonCard = ({ card, convertToUpperCase, onCardClick, renderImage, renderTypes }) => {

    const [pokemonData, setPokemonData] = useState()

    useEffect(() => {
        pokemonApi.getPokemonData(card.url).then(({data}) => setPokemonData(data));
    }, []);

    if(!pokemonData) {
        return <Spin/>;
    }

    const pokemonColors = generateColor(renderTypes(pokemonData));

    return (
        <div className="pokemons__list-card">
            <div className="pokemons__list-card-img">
                <img src={renderImage(pokemonData.id)} alt="pokemon"></img>
            </div>
            <div className="pokemons__list-card-info">
                <h3 onClick={() => onCardClick(card)} className="pokemons__list-card-info-name" >
                    {convertToUpperCase(card.name)}
                </h3>
                <div className="pokemons__list-card-info-types" >
                    {pokemonData.types.map((item, i) => {
                        return (<p style={{ backgroundColor: `${pokemonColors[i]}` }} 
                        key={item.slot} >
                            {convertToUpperCase(item.type.name)}
                        </p>);
                    })}
                </div>
            </div>
        </div>        
    )
}

export default PokemonCard;
