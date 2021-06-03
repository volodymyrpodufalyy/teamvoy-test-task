import React, { useState, useEffect } from 'react';
import { pokemonApi } from "utils/api";
import "./PokemonInfo.scss";
import { Spin } from "components"

const PokemonInfo = ({ card, renderImage, renderTypes, convertToUpperCase }) => {
    const [pokemonInfo, setPokemonInfo] = useState()

    useEffect(() => {
        pokemonApi.getPokemonData(card.url).then(({data}) => setPokemonInfo(data));
    }, [renderImage]);

    if(!pokemonInfo) {
        return <Spin/>;
    }

    return (
        <div className="pokemon__info" >
            <div className="pokemon__info-img">
                <img src={renderImage(pokemonInfo.id)} alt="pokemon"></img>
            </div>
            <div className="pokemons__info-content">
                <h3 className="pokemon__info-content-name" >{convertToUpperCase(card.name) + ` #00${pokemonInfo.id}`}</h3>
                {/* <div className="pokemons__list-card-info-types" >
                    {pokeData.types.map((item, i) => {
                        return (<p style={{ backgroundColor: `${pokemonColors[i]}` }} 
                        key={item.slot} >
                            {convertToUpperCase(item.type.name)}
                        </p>);
                    })}
                </div> */}
            </div>
        </div>
    )
}

export default PokemonInfo;
