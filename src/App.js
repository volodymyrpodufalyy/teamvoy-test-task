import React, { useEffect, useState } from "react";
import pikachu from "./pokemon.png"
import { PokemonCard, Spin } from "components"
import { pokemonApi } from "utils/api";


const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    pokemonApi.getAll(0).then(({data}) => setPokemons(data.results));
  }, []);

  if(!pokemons.length) {
    return <Spin/>
  }

  return (
    <div className="wrapper">
      <header>
        <div className="pokedex-title">
          <h1>Pokedex</h1>
        </div>
      </header>
      <main>
        <section className="pokemons-content" >
          <div className="pokemons">
            <ul className="pokemons__list" >
              {pokemons.map((pokemonInfo) => (
                  <li key={pokemonInfo.url}>
                    <PokemonCard card={pokemonInfo} />
                  </li>
                ))}
              </ul>
          </div>
          
        </section>
      </main>
    </div>
  );
}

export default App;
