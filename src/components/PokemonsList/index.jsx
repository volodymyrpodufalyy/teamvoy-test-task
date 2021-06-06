import React, { useEffect, useState } from 'react';
import { Spin, PokemonInfo, PokemonCard } from "components";
import { pokemonApi } from "utils/api";
import "./PokemonsList.scss"

const PokemonsList = ({ pokemons, setPokemons, filtered, pageSize, setPageSize }) => {
    const [activePokemon, setActivePokemon] = useState(); 
    const [opened, setOpened] = useState(false);

    const convertToUpperCase = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }

    console.log(opened);

 

    const renderImage = (id) => {
        return new URL(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`);
    }

    const renderTypes = (data) => {
        return data.types.map(item => item.type.name);
    }

    const onCardClick = (pokemonCallInfo) => {
        setActivePokemon(pokemonCallInfo);
        setOpened(true);
    }

    const onClose = () => {
        setOpened(false)
    }

    useEffect(() => {
        pokemonApi.getAll(pageSize).then(({data}) => setPokemons(data.results));    
    }, [pageSize]);

    const onPageLoad = () => {
        setPageSize(pageSize + 12);
    }

    if(!pokemons) {
        return <Spin/>
    }

    return (
        <section className="pokemons-content" >
            <div className="pokemons">
                <ul className="pokemons__list" >
                {pokemons.map((pokemonInfo) => (
                    <li key={pokemonInfo.url}>
                        <PokemonCard
                        renderTypes={renderTypes}
                        renderImage={renderImage}
                        onCardClick={onCardClick}
                        convertToUpperCase={convertToUpperCase} 
                        card={pokemonInfo} 
                        />
                    </li>
                    ))}
                </ul>
                {!filtered && (<button onClick={onPageLoad} className="pokemons__load">
                    <h1>Load More</h1>
                </button>)}
            </div>          
            {opened && 
                <PokemonInfo 
                onClose={onClose}
                renderTypes={renderTypes}
                renderImage={renderImage}
                convertToUpperCase={convertToUpperCase} 
                card={activePokemon} 
                />}
        </section>
           
    )
}

export default PokemonsList;

